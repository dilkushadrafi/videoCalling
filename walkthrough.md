# Video Calling Application - Complete Walkthrough

## 📖 Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Getting Started](#getting-started)
4. [Frontend Deep Dive](#frontend-deep-dive)
5. [Backend Deep Dive](#backend-deep-dive)
6. [Authentication Flow](#authentication-flow)
7. [Video Calling Implementation](#video-calling-implementation)
8. [Key Features Walkthrough](#key-features-walkthrough)
9. [Troubleshooting](#troubleshooting)
10. [Development Tips](#development-tips)

---

## 🎯 Project Overview

This is a full-stack video calling application that combines modern web technologies to deliver a seamless video conferencing experience with secure user authentication.

### What This Application Does
- Allows users to create accounts and log in securely
- Enables real-time video calling between multiple participants
- Provides room-based video conferencing (users join rooms via room IDs)
- Offers a modern, responsive UI with animations
- Includes documentation, help center, community, and pricing pages

### Technology Stack
**Frontend:**
- React 19 with Vite
- React Router DOM for navigation
- Tailwind CSS 4 for styling
- ZEGO Cloud UIKit for video calling

**Backend:**
- Node.js with Express
- MongoDB Atlas for database
- JWT for authentication
- bcryptjs for password hashing

---

## 🏗️ Architecture

### High-Level Architecture
```
┌─────────────────────────────────────────────────────────┐
│                     Frontend (React)                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌─────────┐ │
│  │  Login   │  │  Signup  │  │   Home   │  │  Video  │ │
│  └──────────┘  └──────────┘  └──────────┘  └─────────┘ │
│                                                           │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌─────────┐ │
│  │   Docs   │  │   Help   │  │Community │  │ Pricing │ │
│  └──────────┘  └──────────┘  └──────────┘  └─────────┘ │
└─────────────────────────────────────────────────────────┘
                          ↕ HTTP/REST API
┌─────────────────────────────────────────────────────────┐
│                  Backend (Express Server)                │
│  ┌──────────────────────────────────────────────────┐   │
│  │  Authentication Routes (/api/auth)               │   │
│  │  - POST /signup  - POST /login  - GET /verify    │   │
│  └──────────────────────────────────────────────────┘   │
│                          ↕                               │
│  ┌──────────────────────────────────────────────────┐   │
│  │  JWT Middleware (Token Verification)             │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                          ↕ Mongoose ODM
┌─────────────────────────────────────────────────────────┐
│                    MongoDB Atlas                         │
│  ┌──────────────────────────────────────────────────┐   │
│  │  Users Collection                                │   │
│  │  { username, email, password (hashed) }          │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘

                    ZEGO Cloud (Video Service)
                    ↕ WebRTC Connection
                  Video Calling Component
```

### Folder Structure
```
videoCalling/
├── server/                      # Backend application
│   ├── controllers/
│   │   └── authController.js    # Authentication logic
│   ├── middleware/
│   │   └── authMiddleware.js    # JWT verification
│   ├── models/
│   │   └── User.js              # User schema
│   ├── routes/
│   │   └── authRoutes.js        # Auth endpoints
│   ├── .env                     # Environment variables
│   ├── server.js                # Server entry point
│   └── package.json
│
├── videocalling/                # Frontend application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.jsx        # Login page
│   │   │   ├── Signup.jsx       # Signup page
│   │   │   ├── Home.jsx         # Landing page
│   │   │   ├── VideoComp.jsx    # Video calling component
│   │   │   ├── Navbar.jsx       # Navigation bar
│   │   │   ├── Hero.jsx         # Hero section
│   │   │   ├── Documentation.jsx
│   │   │   ├── HelpCenter.jsx
│   │   │   ├── Community.jsx
│   │   │   ├── Pricing.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Faq.jsx
│   │   │   ├── Testimonial.jsx
│   │   │   └── PartnerLogo.jsx
│   │   ├── contexts/
│   │   │   └── AuthContext.jsx  # Auth state management
│   │   ├── App.jsx              # Main app with routes
│   │   ├── main.jsx             # Entry point
│   │   └── index.css            # Global styles
│   └── package.json
│
├── README.md
└── walkthrough.md               # This file
```

---

## 🚀 Getting Started

### Prerequisites
Before you begin, ensure you have:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB Atlas account** - [Sign up here](https://www.mongodb.com/cloud/atlas)
- **ZEGO Cloud account** (for video calling) - [Sign up here](https://www.zegocloud.com/)
- **Code editor** (VS Code recommended)

### Step 1: Clone and Setup

```bash
# Navigate to your project directory
cd /Users/macbookair/Desktop/videoCalling

# Install root dependencies (if any)
npm install
```

### Step 2: Backend Setup

```bash
# Navigate to server directory
cd server

# Install backend dependencies
npm install
```

**Create `.env` file in the `server` directory:**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/videocalling?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
PORT=5001
```

**Important:** Replace the MongoDB URI with your actual connection string from MongoDB Atlas.

### Step 3: Frontend Setup

```bash
# Navigate to frontend directory
cd ../videocalling

# Install frontend dependencies
npm install
```

### Step 4: Start the Application

**Terminal 1 - Start Backend:**
```bash
cd server
npm start
```
✅ Backend should be running on `http://localhost:5001`

**Terminal 2 - Start Frontend:**
```bash
cd videocalling
npm run dev
```
✅ Frontend should be running on `http://localhost:5173`

### Step 5: Verify Installation

1. Open your browser and go to `http://localhost:5173`
2. You should see the landing page
3. Try creating an account via the Signup page
4. Log in with your credentials
5. Test the video calling feature

---

## 🎨 Frontend Deep Dive

### Application Routes

The application uses React Router DOM for navigation:

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with hero, features, testimonials |
| `/login` | Login | User login page |
| `/signup` | Signup | User registration page |
| `/room/:roomID` | VideoComp | Video calling room |
| `/docs` | Documentation | API and usage documentation |
| `/help` | HelpCenter | Help and support center |
| `/community` | Community | Community forum and discussions |
| `/pricing` | Pricing | Pricing plans and features |

### Key Components Explained

#### 1. **App.jsx** - Main Application Router
```javascript
// Defines all routes and their corresponding components
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/room/:roomID' element={<VideoComp />} />
    // ... other routes
  </Routes>
</BrowserRouter>
```

#### 2. **Home.jsx** - Landing Page
- Displays the hero section
- Shows features and benefits
- Includes testimonials and partner logos
- Has call-to-action buttons

#### 3. **Login.jsx** - Authentication
- Form for user login
- Sends credentials to backend API
- Stores JWT token in localStorage
- Redirects to home page on success

#### 4. **Signup.jsx** - User Registration
- Form for creating new accounts
- Validates user input
- Sends registration data to backend
- Auto-login after successful signup

#### 5. **VideoComp.jsx** - Video Calling
- Integrates ZEGO Cloud UIKit
- Uses room ID from URL parameters
- Handles video call initialization
- Manages participant connections

#### 6. **Navbar.jsx** - Navigation
- Responsive navigation menu
- Links to all major pages
- User authentication status display
- Mobile-friendly hamburger menu

### State Management

The application uses React Context API for authentication state:

```javascript
// AuthContext provides:
- user: Current user object
- login(): Function to log in
- logout(): Function to log out
- isAuthenticated: Boolean for auth status
```

### Styling Approach

- **Tailwind CSS 4** for utility-first styling
- **Custom CSS** in `index.css` for animations
- **Responsive design** with mobile-first approach
- **Modern animations** for enhanced UX

---

## ⚙️ Backend Deep Dive

### Server Architecture

#### 1. **server.js** - Entry Point
```javascript
// Key responsibilities:
- Initialize Express app
- Connect to MongoDB
- Setup CORS
- Register routes
- Start server on port 5001
```

#### 2. **Models (User.js)**
```javascript
// User Schema:
{
  username: String (required, unique)
  email: String (required, unique)
  password: String (required, hashed)
  createdAt: Date (auto-generated)
}
```

#### 3. **Controllers (authController.js)**

**Signup Controller:**
- Validates input data
- Checks if user already exists
- Hashes password with bcryptjs
- Creates new user in database
- Returns JWT token

**Login Controller:**
- Finds user by email
- Compares password with hashed version
- Generates JWT token
- Returns user data and token

**Verify Controller:**
- Validates JWT token
- Returns user information
- Used for persistent login

#### 4. **Middleware (authMiddleware.js)**
```javascript
// JWT Verification:
- Extracts token from Authorization header
- Verifies token signature
- Attaches user to request object
- Protects routes from unauthorized access
```

#### 5. **Routes (authRoutes.js)**
```javascript
POST /api/auth/signup    // Register new user
POST /api/auth/login     // Authenticate user
GET  /api/auth/verify    // Verify token (protected)
```

### Database Schema

**Users Collection:**
```javascript
{
  _id: ObjectId,
  username: "johndoe",
  email: "john@example.com",
  password: "$2a$10$...", // bcrypt hash
  createdAt: ISODate("2025-11-27T00:00:00Z")
}
```

### Security Features

1. **Password Hashing:** bcryptjs with salt rounds
2. **JWT Tokens:** 7-day expiration
3. **CORS Protection:** Configured for frontend origin
4. **Environment Variables:** Sensitive data in .env
5. **Input Validation:** Server-side validation

---

## 🔐 Authentication Flow

### Signup Flow
```
User fills signup form
       ↓
Frontend validates input
       ↓
POST /api/auth/signup
       ↓
Backend checks if user exists
       ↓
Password is hashed (bcryptjs)
       ↓
User saved to MongoDB
       ↓
JWT token generated
       ↓
Token sent to frontend
       ↓
Token stored in localStorage
       ↓
User redirected to home page
```

### Login Flow
```
User enters credentials
       ↓
Frontend validates input
       ↓
POST /api/auth/login
       ↓
Backend finds user by email
       ↓
Password comparison
       ↓
JWT token generated
       ↓
Token sent to frontend
       ↓
Token stored in localStorage
       ↓
User redirected to home page
```

### Protected Route Access
```
User accesses protected route
       ↓
Frontend checks localStorage for token
       ↓
Token sent in Authorization header
       ↓
Backend middleware verifies token
       ↓
If valid: Access granted
If invalid: 401 Unauthorized
```

### Logout Flow
```
User clicks logout
       ↓
Token removed from localStorage
       ↓
Auth state cleared
       ↓
User redirected to login page
```

---

## 📹 Video Calling Implementation

### ZEGO Cloud Integration

The video calling feature uses **ZEGO UIKit Prebuilt** for WebRTC-based video conferencing.

### How It Works

1. **User enters room ID** on the home page
2. **Navigation** to `/room/:roomID`
3. **VideoComp component** initializes
4. **ZEGO UIKit** creates meeting instance
5. **User joins** the video room
6. **Real-time communication** begins

### VideoComp.jsx Breakdown

```javascript
// Key steps:
1. Get roomID from URL parameters
2. Get user information (username)
3. Generate unique user ID
4. Initialize ZEGO meeting
5. Configure video/audio settings
6. Join the room
```

### Room-Based System

- **Room ID:** Unique identifier for each call
- **Multiple participants:** Can join same room ID
- **Peer-to-peer:** Direct WebRTC connections
- **No backend storage:** Rooms exist only during active calls

### ZEGO Features Used

- Video streaming
- Audio streaming
- Screen sharing
- Chat messaging
- Participant list
- Mute/unmute controls

---

## 🎯 Key Features Walkthrough

### Feature 1: User Registration

**User Journey:**
1. Click "Sign Up" on navbar
2. Fill in username, email, password
3. Submit form
4. Account created automatically
5. Logged in and redirected to home

**Technical Flow:**
- Form validation in frontend
- POST request to `/api/auth/signup`
- Password hashed with bcryptjs
- User document created in MongoDB
- JWT token generated and returned
- Token stored in localStorage

### Feature 2: User Login

**User Journey:**
1. Click "Login" on navbar
2. Enter email and password
3. Submit form
4. Authenticated and redirected

**Technical Flow:**
- Form validation
- POST request to `/api/auth/login`
- Email lookup in database
- Password comparison
- JWT token generation
- Token storage and redirect

### Feature 3: Video Calling

**User Journey:**
1. Enter room ID on home page
2. Click "Join Room"
3. Grant camera/microphone permissions
4. Join video call
5. Interact with other participants

**Technical Flow:**
- Room ID captured from input
- Navigate to `/room/:roomID`
- ZEGO UIKit initialization
- WebRTC connection establishment
- Media stream activation
- Real-time communication

### Feature 4: Persistent Login

**User Journey:**
1. User logs in
2. Closes browser
3. Returns later
4. Still logged in automatically

**Technical Flow:**
- JWT token stored in localStorage
- On app load, check for token
- If token exists, verify with backend
- If valid, restore user session
- If invalid, redirect to login

### Feature 5: Documentation & Help

**User Journey:**
1. Click "Documentation" or "Help" in navbar
2. Browse comprehensive guides
3. Find answers to questions
4. Access API documentation

**Pages Available:**
- **Documentation:** API guides, code examples
- **Help Center:** FAQs, troubleshooting
- **Community:** Forums, discussions
- **Pricing:** Plans and features

---

## 🔧 Troubleshooting

### Common Issues and Solutions

#### Issue 1: Backend Won't Start
**Error:** `Cannot connect to MongoDB`

**Solution:**
1. Check `.env` file exists in `server/` directory
2. Verify `MONGODB_URI` is correct
3. Ensure MongoDB Atlas cluster is running
4. Check network connectivity
5. Whitelist your IP in MongoDB Atlas

#### Issue 2: Frontend Can't Connect to Backend
**Error:** `Network Error` or `CORS Error`

**Solution:**
1. Ensure backend is running on port 5001
2. Check CORS configuration in `server.js`
3. Verify frontend is making requests to correct URL
4. Check browser console for specific errors

#### Issue 3: Login/Signup Not Working
**Error:** `401 Unauthorized` or `User already exists`

**Solution:**
1. Check MongoDB connection
2. Verify user credentials
3. Clear localStorage and try again
4. Check backend logs for errors
5. Ensure JWT_SECRET is set in .env

#### Issue 4: Video Calling Not Working
**Error:** Camera/microphone not accessible

**Solution:**
1. Grant browser permissions for camera/mic
2. Check ZEGO Cloud credentials
3. Ensure HTTPS or localhost (WebRTC requirement)
4. Try different browser
5. Check firewall settings

#### Issue 5: Styling Issues
**Error:** Tailwind classes not working

**Solution:**
1. Ensure Tailwind CSS is installed
2. Check `tailwind.config.js` configuration
3. Verify `@tailwindcss/vite` plugin is loaded
4. Restart dev server
5. Clear browser cache

### Debug Mode

**Enable detailed logging:**

Backend:
```javascript
// Add to server.js
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});
```

Frontend:
```javascript
// Add to components
console.log('Current state:', state);
console.log('API response:', response);
```

---

## 💡 Development Tips

### Best Practices

1. **Environment Variables**
   - Never commit `.env` files
   - Use `.env.example` for templates
   - Keep secrets secure

2. **Code Organization**
   - Keep components small and focused
   - Use meaningful variable names
   - Comment complex logic

3. **Error Handling**
   - Always handle API errors
   - Provide user-friendly error messages
   - Log errors for debugging

4. **Security**
   - Validate all user input
   - Use HTTPS in production
   - Keep dependencies updated
   - Never store passwords in plain text

5. **Performance**
   - Lazy load components when possible
   - Optimize images and assets
   - Minimize bundle size
   - Use React.memo for expensive components

### Development Workflow

1. **Start both servers** (backend and frontend)
2. **Make changes** in your code editor
3. **Hot reload** automatically updates the app
4. **Test changes** in the browser
5. **Check console** for errors
6. **Commit changes** to git

### Useful Commands

```bash
# Backend
cd server
npm start              # Start server
npm run dev            # Start with auto-reload

# Frontend
cd videocalling
npm run dev            # Start dev server
npm run build          # Build for production
npm run preview        # Preview production build
npm run lint           # Run ESLint

# Database
# View MongoDB Atlas dashboard for data inspection
```

### Testing Checklist

- [ ] User can sign up successfully
- [ ] User can log in successfully
- [ ] User can log out successfully
- [ ] Protected routes redirect to login
- [ ] Video calling works with room ID
- [ ] Multiple users can join same room
- [ ] Navbar navigation works
- [ ] All pages load correctly
- [ ] Responsive design works on mobile
- [ ] Forms validate input properly

### Extending the Application

**Add new features:**

1. **User Profiles**
   - Add profile picture upload
   - User bio and settings
   - Edit profile functionality

2. **Call History**
   - Store call records in database
   - Display past calls
   - Call duration tracking

3. **Friend System**
   - Add/remove friends
   - Direct calling to friends
   - Online status indicators

4. **Chat Feature**
   - Text messaging during calls
   - Persistent chat history
   - File sharing

5. **Admin Dashboard**
   - User management
   - Analytics and statistics
   - System monitoring

---

## 📚 Additional Resources

### Documentation Links
- [React Documentation](https://react.dev/)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Manual](https://docs.mongodb.com/)
- [ZEGO Cloud Docs](https://www.zegocloud.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [JWT.io](https://jwt.io/)

### Learning Resources
- [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [MongoDB University](https://university.mongodb.com/)
- [WebRTC Fundamentals](https://webrtc.org/getting-started/overview)

---

## 🎉 Conclusion

You now have a complete understanding of how this video calling application works! This walkthrough covered:

✅ Project architecture and structure  
✅ Frontend and backend implementation  
✅ Authentication flow and security  
✅ Video calling integration  
✅ Key features and user journeys  
✅ Troubleshooting and debugging  
✅ Development best practices  

**Next Steps:**
1. Explore the codebase
2. Make small modifications
3. Add new features
4. Deploy to production
5. Share with users!

Happy coding! 🚀
