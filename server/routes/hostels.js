import express from 'express';
import { getAllHostels, createHostel } from '../controllers/hostels.js';

const router = express.Router();

router.get('/all', getAllHostels);

// router.post('/add', createHostel);

export default router;