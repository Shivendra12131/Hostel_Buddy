import express from 'express';
import { getAllCategories, addCategory } from '../controllers/category.js';

const router = express.Router();

// Route to get all categories
router.get('/all', getAllCategories);

// Route to add a new category
router.post('/add', addCategory);

export default router;