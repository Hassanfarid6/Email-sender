# 📧 Full-Stack Email Sender Application

A modern, full-stack email sending application built with **Next.js 15** for the frontend and **Express.js** with **Nodemailer** for the backend. Send emails instantly using Gmail's SMTP service with a beautiful, responsive UI.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![Express.js](https://img.shields.io/badge/Express.js-4.18-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Nodemailer](https://img.shields.io/badge/Nodemailer-6.9-red)

## ✨ Features

- 📨 **Send Emails Instantly** - Fast and reliable email delivery via Gmail SMTP
- 🎨 **Modern UI** - Beautiful, responsive interface built with Shadcn/UI and Tailwind CSS
- ⚡ **Real-time Validation** - Input validation on both frontend and backend
- 🔔 **Toast Notifications** - Success and error notifications with Sonner
- 🔒 **Secure** - Environment variables for sensitive credentials
- 📱 **Responsive Design** - Works perfectly on all devices
- ⚙️ **Loading States** - Visual feedback during email sending

## 🏗️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Shadcn/UI** - High-quality UI components
- **Sonner** - Toast notifications

### Backend
- **Express.js** - Web framework for Node.js
- **Nodemailer** - Email sending library
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variable management

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn** or **bun**
- **Gmail account** for SMTP service

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd email-sender-app
```

### 2️⃣ Setup Backend (Express.js)

#### Install Backend Dependencies

```bash
cd backend
npm install
```

#### Configure Gmail SMTP Credentials

1. **Create `.env` file** in the `backend/` directory:

```bash
cp .env.example .env
```

2. **Edit `.env` file** with your credentials:

```env
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

#### 🔐 Generate Gmail App Password

**Important:** You need to use an **App Password**, not your regular Gmail password.

1. Go to your Google Account: https://myaccount.google.com/
2. Select **Security**
3. Under "Signing in to Google," select **2-Step Verification** (you must enable this first)
4. At the bottom, select **App passwords**
5. Select **Mail** and your device
6. Click **Generate**
7. Copy the 16-character password and paste it into your `.env` file as `EMAIL_PASS`

#### Start Backend Server

```bash
npm start
# or for development with auto-reload
npm run dev
```

The backend server will start on **http://localhost:5000**

### 3️⃣ Setup Frontend (Next.js)

#### Install Frontend Dependencies

```bash
cd ..  # Go back to root directory
npm install
```

#### Start Frontend Development Server

```bash
npm run dev
```

The frontend will start on **http://localhost:3000**

## 🎯 Usage

1. **Start the backend server** (port 5000)
2. **Start the frontend server** (port 3000)
3. Open your browser to **http://localhost:3000**
4. Fill in the email form:
   - **Recipient Email**: Enter the recipient's email address
   - **Subject**: Enter your email subject
   - **Message**: Type your email message
5. Click **Send Email**
6. You'll see a success or error notification

## 📁 Project Structure

```
.
├── backend/
│   ├── server.js           # Express.js server with email API
│   ├── package.json        # Backend dependencies
│   ├── .env.example        # Example environment variables
│   ├── .env               # Your actual credentials (gitignored)
│   └── .gitignore         # Backend gitignore
│
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with Toaster
│   │   ├── page.tsx        # Homepage with email form
│   │   └── globals.css     # Global styles
│   │
│   └── components/
│       ├── EmailForm.tsx   # Email form component
│       └── ui/             # Shadcn/UI components
│
├── package.json            # Frontend dependencies
└── README.md              # This file
```

## 🔌 API Endpoints

### POST `/api/send-email`

Send an email via Gmail SMTP.

**Request Body:**
```json
{
  "to": "recipient@example.com",
  "subject": "Hello World",
  "message": "This is a test email"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Email sent successfully!",
  "messageId": "<unique-message-id>"
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "error": "Error message",
  "details": "Detailed error description"
}
```

### GET `/api/health`

Health check endpoint to verify server status.

**Response (200):**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## 🛠️ Development Commands

### Backend
```bash
cd backend
npm start        # Start production server
npm run dev      # Start development server with nodemon
```

### Frontend
```bash
npm run dev      # Start Next.js development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🐛 Troubleshooting

### Backend Connection Error
- Make sure the backend server is running on port 5000
- Check if `EMAIL_USER` and `EMAIL_PASS` are set in `.env`
- Verify your Gmail App Password is correct

### Email Not Sending
- Ensure 2-Step Verification is enabled on your Gmail account
- Use an App Password, not your regular Gmail password
- Check that your Gmail account allows "Less secure app access" (if needed)

### CORS Issues
- The backend has CORS enabled for all origins by default
- If you need to restrict origins, update the CORS configuration in `backend/server.js`

## 🔒 Security Notes

- Never commit your `.env` file to version control
- Use App Passwords instead of your main Gmail password
- Keep your `EMAIL_PASS` secure and rotate it periodically
- Consider adding rate limiting for production use
- Implement authentication for public-facing deployments

## 📝 Environment Variables

### Backend (.env)

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Backend server port | `5000` |
| `EMAIL_USER` | Gmail address | `your-email@gmail.com` |
| `EMAIL_PASS` | Gmail App Password | `abcd efgh ijkl mnop` |

## 🚀 Deployment

### Backend Deployment
- Deploy to **Heroku**, **Railway**, **Render**, or any Node.js hosting
- Set environment variables in your hosting platform
- Ensure PORT is set correctly (most platforms set this automatically)

### Frontend Deployment
- Deploy to **Vercel**, **Netlify**, or any Next.js hosting
- Update the API endpoint URL in `EmailForm.tsx` to your backend URL
- Set up environment variables if needed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📧 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Built with ❤️ using Next.js and Express.js**