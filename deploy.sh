#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/srv/prod/pckasse-for-woocommerce.no"
BRANCH="${1:-main}"

cd "${APP_DIR}"

echo "[deploy] Updating code on ${BRANCH}"
git fetch origin
git checkout "${BRANCH}"
git pull --ff-only origin "${BRANCH}"

echo "[deploy] Building image"
docker compose build --pull

echo "[deploy] Restarting containers"
docker compose up -d --remove-orphans

echo "[deploy] Done"
docker compose ps

if [[ -n "${HEALTH_URL:-}" ]]; then
  echo "[deploy] Health check ${HEALTH_URL}"
  curl -fsS "${HEALTH_URL}" >/dev/null
  echo "[deploy] Health check passed"
fi
