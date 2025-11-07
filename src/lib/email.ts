import * as Brevo from '@getbrevo/brevo'

let apiInstance: Brevo.TransactionalEmailsApi | null = null

/**
 * Escapes HTML special characters to prevent XSS attacks
 */
function escapeHtml(text: string): string {
  const htmlEscapeMap: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  }
  return text.replace(/[&<>"'/]/g, (char) => htmlEscapeMap[char])
}

/**
 * Sanitizes email subject line to prevent header injection
 */
function sanitizeEmailSubject(subject: string): string {
  // Remove newlines, carriage returns, and other control characters
  return subject
    .replace(/[\r\n\t\x00-\x1F\x7F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .substring(0, 255) // Limit subject length
}

function initBrevo(): Brevo.TransactionalEmailsApi | null {
  if (!process.env.BREVO_API_KEY) {
    console.warn('BREVO_API_KEY not set, emails will not be sent')
    return null
  }

  if (apiInstance) {
    return apiInstance
  }

  apiInstance = new Brevo.TransactionalEmailsApi()
  apiInstance.setApiKey(
    Brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY,
  )

  return apiInstance
}

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

export async function sendContactFormEmail(
  formData: ContactFormData,
): Promise<void> {
  const api = initBrevo()

  if (!api) {
    throw new Error('Brevo API not initialized - check BREVO_API_KEY')
  }

  const fromEmail = process.env.FROM_EMAIL || 'ole@iniva.no'
  const contactEmail = process.env.CONTACT_EMAIL || 'ole@iniva.no'

  // Escape all user inputs to prevent XSS
  const safeFirstName = escapeHtml(formData.firstName)
  const safeLastName = escapeHtml(formData.lastName)
  const safeEmail = escapeHtml(formData.email)
  const safePhone = escapeHtml(formData.phone)
  const safeMessage = escapeHtml(formData.message)

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="no">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
          background-color: #f5f5f5;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          padding: 40px;
        }
        .header {
          border-bottom: 3px solid #4f46e5;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        h1 {
          color: #4f46e5;
          font-size: 24px;
          margin: 0 0 10px 0;
        }
        .field {
          margin-bottom: 20px;
          padding: 15px;
          background-color: #f9fafb;
          border-left: 3px solid #4f46e5;
        }
        .field-label {
          font-weight: 600;
          color: #4f46e5;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 5px;
        }
        .field-value {
          color: #1f2937;
          font-size: 16px;
        }
        .message-field {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
          font-size: 12px;
          color: #6b7280;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Ny kontaktforespørsel</h1>
          <p style="margin: 0; color: #6b7280;">Fra PCKasse for WooCommerce kontaktskjema</p>
        </div>

        <div class="field">
          <div class="field-label">Navn</div>
          <div class="field-value">${safeFirstName} ${safeLastName}</div>
        </div>

        <div class="field">
          <div class="field-label">E-post</div>
          <div class="field-value"><a href="mailto:${safeEmail}" style="color: #4f46e5; text-decoration: none;">${safeEmail}</a></div>
        </div>

        <div class="field">
          <div class="field-label">Telefon</div>
          <div class="field-value"><a href="tel:${safePhone}" style="color: #4f46e5; text-decoration: none;">${safePhone}</a></div>
        </div>

        <div class="field">
          <div class="field-label">Melding</div>
          <div class="field-value message-field">${safeMessage}</div>
        </div>

        <div class="footer">
          Sendt fra kontaktskjemaet på pckasse-for-woocommerce.no
        </div>
      </div>
    </body>
    </html>
  `

  const sendSmtpEmail: Brevo.SendSmtpEmail = {
    sender: {
      email: fromEmail,
      name: 'PCKasse for WooCommerce',
    },
    to: [
      {
        email: contactEmail,
      },
    ],
    subject: sanitizeEmailSubject(
      `Kontaktskjema: ${formData.firstName} ${formData.lastName}`,
    ),
    htmlContent,
  }

  try {
    await api.sendTransacEmail(sendSmtpEmail)
    console.log('Contact form email sent successfully')
  } catch (error) {
    console.error('Error sending contact form email:', error)
    throw error
  }
}
