import { Hono } from 'hono'

type Env = {
  ASSETS: Fetcher
  RESEND_API_KEY?: string
  RESEND_FROM?: string
  ADMIN_NOTIFY_EMAIL?: string
  FIREBASE_API_KEY?: string
  FIREBASE_PROJECT_ID?: string
}

const app = new Hono<{ Bindings: Env }>()

app.get('/api/health', (c) => c.json({ ok: true, timestamp: new Date().toISOString() }))

// Contact form: saves inquiry to Cloud Firestore & sends email notification via Resend
app.post('/api/contact', async (c) => {
  const body = await c.req.json<{ name?: string; email?: string; message?: string }>().catch(() => ({}) as Record<string, string>)
  const name = body.name?.trim() || 'Anonymous Recruiter'
  const email = body.email?.trim() || ''
  const message = body.message?.trim() || ''

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return c.json({ error: 'Enter a valid email address.' }, 400)
  }
  if (!message) {
    return c.json({ error: 'Write a few words about the project or opportunity.' }, 400)
  }

  // Retrieve keys exclusively from environment variables (.env / Cloudflare env)
  const proc = typeof process !== 'undefined' ? process.env : {}
  const resendApiKey = c.env?.RESEND_API_KEY || proc?.RESEND_API_KEY || ''
  const resendFrom = c.env?.RESEND_FROM || proc?.RESEND_FROM || 'onboarding@resend.dev'
  const adminNotifyEmail = c.env?.ADMIN_NOTIFY_EMAIL || proc?.ADMIN_NOTIFY_EMAIL || 'tpsingh2101@gmail.com'
  const firebaseApiKey = c.env?.FIREBASE_API_KEY || proc?.VITE_FIREBASE_API_KEY || ''
  const firebaseProjectId = c.env?.FIREBASE_PROJECT_ID || proc?.VITE_FIREBASE_PROJECT_ID || 'my-portfolio-1c97b'

  let emailSent = false
  let firestoreSaved = false
  const requestId = 'req_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7)
  const createdAt = new Date().toISOString()

  // 1. Dispatch Email via Resend REST API
  if (resendApiKey && !resendApiKey.includes('placeholder')) {
    try {
      const emailPayload = {
        from: resendFrom,
        to: adminNotifyEmail,
        subject: `New Portfolio Inquiry from ${name}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 580px; margin: 0 auto; padding: 28px; background: #0c1224; color: #f8fafc; border-radius: 12px; border: 1px solid #38bdf8;">
            <h2 style="margin: 0 0 16px; color: #38bdf8; font-size: 22px;">New Inquiry Received</h2>
            <div style="background: #1e293b; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 0 0 10px; font-size: 14px;"><strong style="color: #94a3b8;">Sender Name:</strong> ${name}</p>
              <p style="margin: 0 0 10px; font-size: 14px;"><strong style="color: #94a3b8;">Sender Email:</strong> <a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a></p>
              <p style="margin: 0; font-size: 14px;"><strong style="color: #94a3b8;">Received At:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} (IST)</p>
            </div>
            <div style="background: #111827; padding: 18px; border-radius: 8px; border-left: 4px solid #38bdf8;">
              <h4 style="margin: 0 0 8px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8;">Message</h4>
              <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="margin: 20px 0 0; font-size: 12px; color: #64748b; text-align: center;">Tejpal Singh Jodha · Business Analyst Portfolio</p>
          </div>
        `
      }

      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailPayload)
      })

      if (res.ok) {
        emailSent = true
      } else {
        const errText = await res.text()
        console.warn('Resend API response:', res.status, errText)
      }
    } catch (e: any) {
      console.warn('Resend fetch error:', e.message)
    }
  }

  // 2. Persist to Cloud Firestore via Firestore REST API
  if (firebaseApiKey) {
    try {
      const firestoreUrl = `https://firestore.googleapis.com/v1/projects/${firebaseProjectId}/databases/(default)/documents/interview_requests?key=${firebaseApiKey}&documentId=${requestId}`
      const docPayload = {
        fields: {
          id: { stringValue: requestId },
          name: { stringValue: name },
          email: { stringValue: email },
          message: { stringValue: message },
          status: { stringValue: 'Pending' },
          createdAt: { stringValue: createdAt }
        }
      }

      const fsRes = await fetch(firestoreUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(docPayload)
      })

      if (fsRes.ok) {
        firestoreSaved = true
      } else {
        const fsErr = await fsRes.text()
        console.warn('Firestore REST write note:', fsRes.status, fsErr)
      }
    } catch (fsErr: any) {
      console.warn('Firestore REST error:', fsErr.message)
    }
  }

  return c.json({
    ok: true,
    emailSent,
    firestoreSaved,
    requestId,
    message: 'Thank you. Your message has been received and saved.'
  })
})

app.all('*', (c) => c.env.ASSETS.fetch(c.req.raw))

export default app
