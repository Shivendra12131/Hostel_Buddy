import express from 'express';
import { getAllCategories, addCategory } from '../controllers/category.js';

const router = express.Router();

// Route to get all categories
router.get('/categories', getAllCategories);

// Route to add a new category
router.post('/categories', addCategory);

export default router;