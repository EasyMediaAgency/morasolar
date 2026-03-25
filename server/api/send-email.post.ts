import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const { resendApiKey, emailFrom, emailTo } = useRuntimeConfig()

  const resend = new Resend(resendApiKey)
  const body = await readBody(event)

  const { name, email, phone, message } = body

  if (!name || !email || !phone) {
    throw createError({ statusCode: 400, statusMessage: 'Hiányzó mezők' })
  }

  const { error } = await resend.emails.send({
    from: emailFrom,
    to: emailTo,
    subject: 'Új email a morasolar.com-ról',
    html: `
      <h2>Új üzenet a weboldalról</h2>
      <p><strong>Név:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefonszám:</strong> ${phone}</p>
      <p><strong>Üzenet:</strong> ${message || 'Nincs üzenet'}</p>
    `,
  })

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message })
  }

  return { success: true }
})
