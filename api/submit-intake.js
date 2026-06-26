import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const data = req.body || {}
  const { name, email, page } = data

  if (!name || !email) {
    res.status(400).json({ error: 'Missing name or email' })
    return
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: Number(process.env.SMTP_PORT || 465) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const rows = Object.entries(data)
    .filter(([key]) => key !== 'name' && key !== 'email' && key !== 'page')
    .map(([key, value]) => `<tr><td style="padding:6px 12px;color:#888;">${key}</td><td style="padding:6px 12px;">${value}</td></tr>`)
    .join('')

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.TO_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `New intake — ${page || 'Blockverse'} — ${name}`,
      html: `
        <h2>${page || 'Intake'} submission</h2>
        <p><b>Name:</b> ${name}<br><b>Email:</b> ${email}</p>
        <table>${rows}</table>
      `,
    })
    res.status(200).json({ ok: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to send' })
  }
}
