import express from 'express';
import { addOrder, cancelProductRequest } from '../controllers/order.js';
import { auth } from '../middlewares/auth.js';

const router = express.Router();

router.post('/add', auth, addOrder);
router.delete('/cancel', auth, cancelProductRequest);

export default router;