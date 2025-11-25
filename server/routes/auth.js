import express from 'express';
import { signup, login, verifyToken } from '../controllers/authController.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/signup', signup);
router.post('/login', login);

// Protected route
router.get('/verify', authMiddleware, verifyToken);

export default router;
