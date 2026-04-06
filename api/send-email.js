export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, message } = req.body;
  const apiKey = process.env.BREVO_API_KEY;

  const sendEmail = async (payload) => {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error('Brevo API failed');
    return response;
  };

  try {
    await sendEmail({
      sender: { name, email: 'noreply@thrustmit.in' },
      to: [{ email: 'management@thrustmit.in', name: 'thrustMIT Team' }],
      replyTo: { email, name },
      subject: `New Contact Form Message from ${name}`,
      htmlContent: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:linear-gradient(135deg,#2563eb,#1e40af);color:white;padding:30px;text-align:center;border-radius:10px 10px 0 0">
            <h1 style="margin:0;font-size:24px;color:#fff">New Contact Form Submission</h1>
            <p style="margin:10px 0 0;opacity:.9;color:#fff">thrustMIT Website</p>
          </div>
          <div style="background:#f8f9fa;padding:30px;border-radius:0 0 10px 10px">
            <div style="margin-bottom:20px">
              <span style="font-weight:bold;color:#2563eb;font-size:14px;text-transform:uppercase;letter-spacing:0.5px;display:block;margin-bottom:5px">From</span>
              <div style="background:white;padding:15px;border-radius:5px;border-left:4px solid #2563eb;color:#333">${name}</div>
            </div>
            <div style="margin-bottom:20px">
              <span style="font-weight:bold;color:#2563eb;font-size:14px;text-transform:uppercase;letter-spacing:0.5px;display:block;margin-bottom:5px">Email</span>
              <div style="background:white;padding:15px;border-radius:5px;border-left:4px solid #2563eb;color:#333">${email}</div>
            </div>
            <div style="margin-bottom:20px">
              <span style="font-weight:bold;color:#2563eb;font-size:14px;text-transform:uppercase;letter-spacing:0.5px;display:block;margin-bottom:5px">Message</span>
              <div style="background:white;padding:15px;border-radius:5px;border-left:4px solid #2563eb;color:#333">${message.replace(/\n/g, '<br>')}</div>
            </div>
            <div style="background:#e0f2fe;border-left:4px solid #0284c7;padding:12px 15px;margin-top:20px;border-radius:5px;font-size:13px;color:#0c4a6e">
              <strong>Reply directly</strong> to this email to respond to ${name}
            </div>
            <div style="text-align:center;margin-top:30px;padding-top:20px;border-top:1px solid #ddd;color:#666;font-size:12px">
              <p>This email was sent from the thrustMIT contact form</p>
              <p>Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            </div>
          </div>
        </div>
      `
    });

    await sendEmail({
      sender: { name: 'thrustMIT', email: 'noreply@thrustmit.in' },
      to: [{ email, name }],
      subject: 'Message Received - thrustMIT',
      htmlContent: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:linear-gradient(135deg,#2563eb,#1e40af);color:white;padding:30px;text-align:center;border-radius:10px 10px 0 0">
            <h1 style="margin:0;font-size:24px;color:#fff">Thank You for Contacting Us!</h1>
          </div>
          <div style="background:#f8f9fa;padding:30px;border-radius:0 0 10px 10px">
            <p style="color:#333">Hi <strong>${name}</strong>,</p>
            <p style="color:#333">Thank you for reaching out to thrustMIT! We've received your message and will get back to you as soon as possible.</p>
            <div style="background:white;padding:20px;border-radius:5px;border-left:4px solid #2563eb;margin:20px 0;color:#333">
              <strong>Your message:</strong><br><br>${message.replace(/\n/g, '<br>')}
            </div>
            <p style="color:#333">Our team typically responds within 24-48 hours. If you have any urgent queries, feel free to reach out to us directly at <a href="mailto:management@thrustmit.in" style="color:#2563eb">management@thrustmit.in</a>.</p>
            <p style="color:#333">Best regards,<br><strong>The thrustMIT Team</strong></p>
            <div style="text-align:center;margin-top:30px;padding-top:20px;border-top:1px solid #ddd;color:#666;font-size:12px">
              <p>This is an automated confirmation email from thrustMIT</p>
              <p>Bay No. 11, Techshila, Manipal Institute of Technology, Manipal</p>
            </div>
          </div>
        </div>
      `
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send email' });
  }
}