# 🎥 Video Calling Application

<div align="center">

![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.18-000000?style=for-the-badge&logo=express&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

**A modern, full-stack video calling application with secure authentication and real-time communication**

[Features](#-features) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Tech Stack](#-tech-stack) • [License](#-license)

</div>

---

## 📖 Overview

A production-ready video calling application that combines cutting-edge web technologies to deliver seamless video conferencing with enterprise-grade security. Built with React 19, Node.js, Express, MongoDB Atlas, and ZEGO Cloud for WebRTC-based video communication.

### ✨ What Makes This Special

- 🔐 **Secure Authentication** - JWT-based auth with bcrypt password hashing
- 📹 **HD Video Calling** - Room-based conferencing powered by ZEGO Cloud
- 🎨 **Modern UI/UX** - Beautiful, responsive design with Tailwind CSS 4
- 🚀 **Fast & Scalable** - Built with Vite and optimized for performance
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- 🌐 **Complete Platform** - Includes docs, help center, community, and pricing pages

---

## 🚀 Features

### Core Features
- ✅ **User Authentication**
  - Secure signup and login system
  - JWT token-based authentication
  - Persistent sessions with auto-login
  - Password encryption with bcryptjs
  
- ✅ **Video Conferencing**
  - Room-based video calls
  - Multi-participant support
  - Screen sharing capabilities
  - Built-in chat messaging
  - Audio/video controls
  
- ✅ **Modern Interface**
  - Responsive navigation with mobile menu
  - Animated hero section
  - Interactive components
  - Dark mode ready
  - Smooth transitions and animations

### Additional Pages
- 📚 **Documentation** - Comprehensive API and usage guides
- 🆘 **Help Center** - FAQs and troubleshooting resources
- 👥 **Community** - Forum and discussion boards
- 💰 **Pricing** - Flexible pricing plans and features
- 🎯 **Landing Page** - Feature showcase with testimonials

---

## ⚡ Quick Start

### Prerequisites

Ensure you have the following installed:
- **Node.js** v18 or higher ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)
- **MongoDB Atlas** account ([Sign up free](https://www.mongodb.com/cloud/atlas))
- **ZEGO Cloud** account ([Sign up](https://www.zegocloud.com/))

### Installation

**1. Clone the repository**
```bash
git clone <your-repo-url>
cd videoCalling
```

**2. Setup Backend**
```bash
cd server
npm install
```

Create `.env` file in `server/` directory:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/videocalling
JWT_SECRET=your_super_secret_jwt_key_min_32_characters
PORT=5001
```

**3. Setup Frontend**
```bash
cd ../videocalling
npm install
```

**4. Start Development Servers**

Terminal 1 (Backend):
```bash
cd server
npm start
```
✅ Backend running at `http://localhost:5001`

Terminal 2 (Frontend):
```bash
cd videocalling
npm run dev
```
✅ Frontend running at `http://localhost:5173`

**5. Open your browser**
Navigate to `http://localhost:5173` and start using the app! 🎉

---

## 📁 Project Structure

```
videoCalling/
│
├── 📂 server/                      # Backend (Node.js + Express)
│   ├── 📂 controllers/
│   │   └── authController.js       # Authentication logic
│   ├── 📂 middleware/
│   │   └── authMiddleware.js       # JWT verification
│   ├── 📂 models/
│   │   └── User.js                 # MongoDB User schema
│   ├── 📂 routes/
│   │   └── authRoutes.js           # API endpoints
│   ├── .env                        # Environment variables
│   ├── server.js                   # Server entry point
│   └── package.json
│
├── 📂 videocalling/                # Frontend (React + Vite)
│   ├── 📂 src/
│   │   ├── 📂 components/
│   │   │   ├── Login.jsx           # Login page
│   │   │   ├── Signup.jsx          # Registration page
│   │   │   ├── Home.jsx            # Landing page
│   │   │   ├── VideoComp.jsx       # Video calling component
│   │   │   ├── Navbar.jsx          # Navigation bar
│   │   │   ├── Hero.jsx            # Hero section
│   │   │   ├── Documentation.jsx   # Docs page
│   │   │   ├── HelpCenter.jsx      # Help page
│   │   │   ├── Community.jsx       # Community page
│   │   │   ├── Pricing.jsx         # Pricing page
│   │   │   ├── Footer.jsx          # Footer component
│   │   │   ├── Faq.jsx             # FAQ component
│   │   │   ├── Testimonial.jsx     # Testimonials
│   │   │   └── PartnerLogo.jsx     # Partner logos
│   │   ├── 📂 contexts/
│   │   │   └── AuthContext.jsx     # Auth state management
│   │   ├── App.jsx                 # Main app with routing
│   │   ├── main.jsx                # Entry point
│   │   └── index.css               # Global styles
│   └── package.json
│
├── README.md                       # This file
└── walkthrough.md                  # Detailed documentation
```

---

## 🔐 API Endpoints

### Authentication Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/auth/signup` | Register new user | ❌ |
| `POST` | `/api/auth/login` | Authenticate user | ❌ |
| `GET` | `/api/auth/verify` | Verify JWT token | ✅ |

### Request/Response Examples

**Signup Request:**
```json
POST /api/auth/signup
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Login Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "username": "johndoe",
    "email": "john@example.com"
  }
}
```

---

## 🎨 Tech Stack

### Frontend Technologies
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.0 | UI framework |
| **Vite** | 6.1 | Build tool & dev server |
| **React Router DOM** | 7.1 | Client-side routing |
| **Tailwind CSS** | 4.0 | Utility-first styling |
| **ZEGO UIKit** | 2.14 | Video calling SDK |

### Backend Technologies
| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | 18+ | Runtime environment |
| **Express** | 4.18 | Web framework |
| **MongoDB** | Atlas | Database (cloud) |
| **Mongoose** | 8.0 | MongoDB ODM |
| **JWT** | 9.0 | Authentication tokens |
| **bcryptjs** | 2.4 | Password hashing |
| **CORS** | 2.8 | Cross-origin requests |

---

## 📝 Usage Guide

### 1️⃣ Create an Account
- Navigate to the signup page
- Enter username, email, and password
- Click "Sign Up"
- Automatically logged in after registration

### 2️⃣ Login
- Go to login page
- Enter your email and password
- Click "Login"
- Redirected to home page

### 3️⃣ Start a Video Call
- Enter a room ID on the home page
- Click "Join Room"
- Grant camera/microphone permissions
- Start communicating!

### 4️⃣ Join an Existing Call
- Get the room ID from another user
- Enter the same room ID
- Join the ongoing call

### 5️⃣ Explore Features
- **Documentation**: Learn about API usage
- **Help Center**: Find answers to common questions
- **Community**: Connect with other users
- **Pricing**: View available plans

---

## 🔒 Security Features

- 🔐 **Password Security**: bcryptjs hashing with salt rounds
- 🎫 **JWT Tokens**: Secure, stateless authentication with 7-day expiration
- 🛡️ **Protected Routes**: Middleware-based route protection
- 🌐 **CORS Protection**: Configured for specific origins
- 🔑 **Environment Variables**: Sensitive data stored securely
- ✅ **Input Validation**: Server-side validation for all inputs
- 🚫 **SQL Injection Prevention**: MongoDB's built-in protection

---

## 📚 Documentation

For detailed documentation, please refer to:

- **[walkthrough.md](./walkthrough.md)** - Complete technical walkthrough
  - Architecture diagrams
  - Component explanations
  - Authentication flows
  - Troubleshooting guide
  - Development tips

---

## 🚀 Deployment

### Backend Deployment (Example: Render)
```bash
# Build command
npm install

# Start command
npm start

# Environment variables
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret>
PORT=5001
```

### Frontend Deployment (Example: Vercel)
```bash
# Build command
npm run build

# Output directory
dist

# Environment variables (if needed)
VITE_API_URL=<your-backend-url>
```

### Recommended Platforms
- **Backend**: Render, Railway, Heroku, AWS
- **Frontend**: Vercel, Netlify, Cloudflare Pages
- **Database**: MongoDB Atlas (already cloud-based)

---

## 🧪 Testing

### Manual Testing Checklist
- [ ] User signup works correctly
- [ ] User login authenticates properly
- [ ] JWT token persists across sessions
- [ ] Video calling connects successfully
- [ ] Multiple users can join same room
- [ ] Logout clears authentication
- [ ] Protected routes redirect to login
- [ ] All navigation links work
- [ ] Responsive design on mobile
- [ ] Forms validate input

### Running Tests
```bash
# Frontend linting
cd videocalling
npm run lint

# Backend testing (add your tests)
cd server
npm test
```

---

## �️ Development

### Available Scripts

**Backend:**
```bash
npm start          # Start production server
npm run dev        # Start with auto-reload (Node --watch)
```

**Frontend:**
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

### Development Workflow
1. Start both backend and frontend servers
2. Make changes in your code editor
3. Hot reload automatically updates the app
4. Test in browser
5. Check console for errors
6. Commit changes to git

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🐛 Troubleshooting

### Common Issues

**Backend won't start:**
- Check MongoDB connection string in `.env`
- Ensure MongoDB Atlas cluster is running
- Verify JWT_SECRET is set

**Frontend can't connect:**
- Ensure backend is running on port 5001
- Check CORS configuration
- Verify API endpoint URLs

**Video calling not working:**
- Grant browser camera/microphone permissions
- Use HTTPS or localhost (WebRTC requirement)
- Check ZEGO Cloud credentials

For more detailed troubleshooting, see [walkthrough.md](./walkthrough.md#troubleshooting).

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👨‍💻 Author

Created with ❤️ for modern video communication

---

## 🌟 Acknowledgments

- [React Team](https://react.dev/) for the amazing framework
- [ZEGO Cloud](https://www.zegocloud.com/) for video calling SDK
- [MongoDB](https://www.mongodb.com/) for the database platform
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- All contributors and users of this project

---

<div align="center">

**[⬆ Back to Top](#-video-calling-application)**

Made with ❤️ and ☕

</div>
