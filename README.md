# Video Calling Application with Authentication

A modern video calling application built with React, Node.js, Express, and MongoDB Atlas. Features include user authentication with JWT, video conferencing using ZEGO Cloud, and a responsive UI.

## 🚀 Features

- **Custom Authentication System**: JWT-based signup, login, and logout
- **MongoDB Atlas Integration**: Secure user data storage
- **Video Calling**: Room-based video conferencing using ZEGO UIKit
- **Modern UI**: Responsive design with Tailwind CSS
- **Persistent Sessions**: Automatic login with stored tokens

## 📋 Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas account
- npm or yarn

## 🛠️ Installation

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd videoCalling
```

### 2. Backend Setup
```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:
```env
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_super_secret_jwt_key
PORT=5001
```

### 3. Frontend Setup
```bash
cd videocalling
npm install
```

## 🚀 Running the Application

### Start Backend Server
```bash
cd server
npm start
```
Backend runs on: http://localhost:5001

### Start Frontend Dev Server
```bash
cd videocalling
npm run dev
```
Frontend runs on: http://localhost:5173

## 📁 Project Structure

```
videoCalling/
├── server/                  # Backend Node.js/Express server
│   ├── controllers/         # Authentication controllers
│   ├── middleware/          # JWT authentication middleware
│   ├── models/             # MongoDB User model
│   ├── routes/             # API routes
│   ├── server.js           # Server entry point
│   └── package.json
│
├── videocalling/           # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── contexts/       # Authentication context
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # App entry point
│   └── package.json
│
└── README.md
```

## 🔐 API Endpoints

### Authentication Routes
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/verify` - Verify JWT token

## 🎨 Tech Stack

### Frontend
- React 19
- React Router DOM
- Tailwind CSS
- ZEGO UIKit for video calling
- Vite

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing

## 📝 Usage

1. **Sign Up**: Create a new account with username, email, and password
2. **Log In**: Access your account with email and password
3. **Join Room**: Enter a room ID to start or join a video call
4. **Log Out**: Securely end your session

## 🔒 Security Features

- Password hashing with bcryptjs
- JWT tokens with 7-day expiration
- Protected API routes
- CORS configuration
- Environment variable protection

## 👨‍💻 Author

Created with ❤️ for modern video communication

## 📄 License

MIT License
