const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  // Allow CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, phone, email, carType, service, date, time, address, message } = req.body || {};

  if (!name || !phone || !email || !carType || !service || !date || !time || !address) {
    return res.status(400).json({ error: "All required fields must be provided." });
  }

  const gmailUser = process.env.GMAIL_USER || "chahalgurpreet46984@gmail.com";
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailPass) {
    return res.status(500).json({
      error: "Email service not configured. Please contact us on WhatsApp or call directly.",
    });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: { user: gmailUser, pass: gmailPass },
  });

  const htmlBody = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0b0b0b;color:#f0f0f0;padding:32px;border-radius:8px;">
      <div style="text-align:center;margin-bottom:28px;border-bottom:1px solid #d4af37;padding-bottom:20px;">
        <h1 style="color:#d4af37;font-size:24px;margin:0;letter-spacing:2px;">PREETS MOBILE CAR WASH</h1>
        <p style="color:#888;font-size:13px;margin:6px 0 0;">New Booking Request</p>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:10px 0;border-bottom:1px solid #222;color:#888;font-size:12px;width:130px;">FULL NAME</td><td style="padding:10px 0;border-bottom:1px solid #222;color:#fff;font-weight:bold;">${name}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #222;color:#888;font-size:12px;">PHONE</td><td style="padding:10px 0;border-bottom:1px solid #222;color:#fff;">${phone}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #222;color:#888;font-size:12px;">EMAIL</td><td style="padding:10px 0;border-bottom:1px solid #222;color:#fff;">${email}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #222;color:#888;font-size:12px;">CAR TYPE</td><td style="padding:10px 0;border-bottom:1px solid #222;color:#fff;">${carType}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #222;color:#888;font-size:12px;">SERVICE</td><td style="padding:10px 0;border-bottom:1px solid #222;color:#d4af37;font-weight:bold;">${service}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #222;color:#888;font-size:12px;">DATE</td><td style="padding:10px 0;border-bottom:1px solid #222;color:#fff;">${date}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #222;color:#888;font-size:12px;">TIME</td><td style="padding:10px 0;border-bottom:1px solid #222;color:#fff;">${time}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #222;color:#888;font-size:12px;">ADDRESS</td><td style="padding:10px 0;border-bottom:1px solid #222;color:#fff;">${address}</td></tr>
        ${message ? `<tr><td style="padding:10px 0;color:#888;font-size:12px;">NOTES</td><td style="padding:10px 0;color:#fff;">${message}</td></tr>` : ""}
      </table>
      <div style="margin-top:28px;padding:16px;background:rgba(212,175,55,0.08);border:1px solid rgba(212,175,55,0.3);border-radius:4px;text-align:center;">
        <p style="color:#d4af37;margin:0;font-size:13px;">Reply to <strong>${email}</strong> or call <strong>${phone}</strong> to confirm.</p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Preets Car Wash Booking" <${gmailUser}>`,
      to: "chahalgurpreet46984@gmail.com",
      replyTo: email,
      subject: `New Booking: ${service} — ${name}`,
      html: htmlBody,
      text: `NEW BOOKING\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nCar: ${carType}\nService: ${service}\nDate: ${date}\nTime: ${time}\nAddress: ${address}\nNotes: ${message || "None"}`,
    });
    return res.status(200).json({ success: true, message: "Booking sent successfully." });
  } catch (err) {
    console.error("Email error:", err.message);
    return res.status(500).json({
      error: "Failed to send booking. Please try WhatsApp or call directly.",
    });
  }
};
