#!/usr/bin/env bash
set -euo pipefail

# Load .env if it exists
if [ -f .env ]; then
  set -a
  source .env
  set +a
fi

if [ -z "${NEXT_PUBLIC_POSTHOG_KEY:-}" ]; then
  echo "Error: NEXT_PUBLIC_POSTHOG_KEY is not set. Add it to .env or export it."
  exit 1
fi

IMAGE="iniva/pckasse-for-woocommerce-no"
NAMESPACE="iniva"
DEPLOYMENT="pckasse-for-woocommerce-no"
BUILD_PLATFORM="${DOCKER_PLATFORM:-}"

if [ -z "$BUILD_PLATFORM" ] && [ "$(uname -s)" = "Darwin" ]; then
  BUILD_PLATFORM="linux/amd64"
fi

# Check for uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
  echo "Error: uncommitted changes. Commit or stash first."
  exit 1
fi

# Check for unpushed commits
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse @{upstream} 2>/dev/null || echo "")
if [ -z "$REMOTE" ]; then
  echo "Error: no upstream branch. Push your branch first."
  exit 1
fi
if [ "$LOCAL" != "$REMOTE" ]; then
  echo "Error: unpushed commits. Push first."
  exit 1
fi

SHA=$(git rev-parse --short HEAD)
echo "Deploying ${IMAGE}:${SHA}..."

BUILD_ARGS="--build-arg NEXT_PUBLIC_POSTHOG_KEY=${NEXT_PUBLIC_POSTHOG_KEY}"
BUILD_ARGS="${BUILD_ARGS} --build-arg NEXT_PUBLIC_POSTHOG_HOST=${NEXT_PUBLIC_POSTHOG_HOST:-https://eu.i.posthog.com}"

# Build
if [ -n "$BUILD_PLATFORM" ]; then
  echo "Building Docker image for platform: ${BUILD_PLATFORM}..."
  docker build --platform "${BUILD_PLATFORM}" ${BUILD_ARGS} -t "${IMAGE}:${SHA}" .
else
  echo "Building Docker image..."
  docker build ${BUILD_ARGS} -t "${IMAGE}:${SHA}" .
fi

# Tag latest
docker tag "${IMAGE}:${SHA}" "${IMAGE}:latest"

# Push
echo "Pushing to Docker Hub..."
docker push "${IMAGE}:${SHA}"
docker push "${IMAGE}:latest"

# Deploy
echo "Updating Kubernetes deployment..."
kubectl set image "deployment/${DEPLOYMENT}" \
  "${DEPLOYMENT}=${IMAGE}:${SHA}" \
  -n "${NAMESPACE}"

echo "Waiting for rollout..."
kubectl rollout status "deployment/${DEPLOYMENT}" \
  -n "${NAMESPACE}" --timeout=120s

echo "Deployed ${IMAGE}:${SHA} successfully!"
