import express from 'express';
import { getAllCategories, addCategory } from '../controllers/category.js';

const router = express.Router();

router.get('/all', getAllCategories);

router.post('/add', addCategory);

export default router;