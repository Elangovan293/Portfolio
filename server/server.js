require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS so client running on another port can make requests
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

// Base Route
app.get("/", (req, res) => {
  res.send("Portfolio contact form backend is running.");
});

// Contact Form Endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Simple validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all fields (name, email, message)."
    });
  }

  console.log(`[Contact Form Request] Received from ${name} <${email}>`);

  // Check if SMTP environment variables are set
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = process.env.SMTP_PORT || 587;
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const targetEmail = process.env.TARGET_EMAIL || "elangovanelango6383@gmail.com";

  if (!emailUser || !emailPass) {
    console.warn("WARNING: SMTP credentials (EMAIL_USER/EMAIL_PASS) are not configured.");
    console.log("=== EMAIL MESSAGE CONTENT (DEVELOPMENT FALLBACK) ===");
    console.log(`To: ${targetEmail}`);
    console.log(`From: ${name} <${email}>`);
    console.log(`Subject: New Portfolio Contact Form Message`);
    console.log(`Message:\n${message}`);
    console.log("====================================================");

    return res.json({
      success: true,
      message: "Message received (Development Mode: printed to console. Configure SMTP in server/.env for real emails)."
    });
  }

  try {
    // Create Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: smtpPort === "465", // true for 465, false for other ports
      auth: {
        user: emailUser,
        pass: emailPass
      }
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${emailUser}>`, // Must send from the authenticated address in some services (like Gmail)
      replyTo: email, // Direct replies back to the sender
      to: targetEmail,
      subject: `Portfolio Contact Form - Message from ${name}`,
      text: `You have received a new contact form submission on your portfolio website:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #0056b3; margin-top: 10px; white-space: pre-wrap;">
          ${message}
        </div>
      `
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log(`[Contact Form Success] Email sent successfully: ${info.messageId}`);

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!"
    });
  } catch (error) {
    console.error("[Contact Form Error] Failed to send email via SMTP:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while sending your message. Please try again later or contact directly."
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Target recipient: ${process.env.TARGET_EMAIL || "elangovanelango6383@gmail.com"}`);
});
