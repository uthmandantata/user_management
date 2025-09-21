import express from 'express';
import { admin, manager, user } from '../controllers/userController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';
import { authorizeRoles } from '../middlewares/roleMiddleware.js';


const router = express.Router();

router.get('/user', verifyToken, authorizeRoles("user"), user);
router.get('/admin', verifyToken, authorizeRoles("admin"), admin);
router.get('/manager', verifyToken, authorizeRoles("admin", "manager"), manager);

export default router;