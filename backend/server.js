const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  const { from, password, to, subject, message } = req.body;

  // Validation
  if (!from || !password || !to || !subject || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please provide sender email, password, recipient email, subject, and message'
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(from)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid sender email address'
    });
  }
  if (!emailRegex.test(to)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid recipient email address'
    });
  }

  try {
    // Create transporter with dynamic credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: from,
        pass: password
      }
    });

    // Email options
    const mailOptions = {
      from: from,
      to: to,
      subject: subject,
      text: message,
      html: `<div style="font-family: Arial, sans-serif; padding: 20px;">
               <h2 style="color: #333;">${subject}</h2>
               <p style="color: #666; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
               <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
               <p style="color: #999; font-size: 12px;">Sent via Email Sender App</p>
             </div>`
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', info.messageId);
    
    res.status(200).json({
      success: true,
      message: 'Email sent successfully!',
      messageId: info.messageId
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send email. Please check your email credentials.',
      details: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Email service ready - credentials will be provided per request');
});