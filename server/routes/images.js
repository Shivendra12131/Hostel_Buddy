import express from 'express'
import multer from 'multer';
import { uploadImages } from '../controllers/images.js';
const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });




router.post('/upload', upload.any('image'), uploadImages);
// router.delete('/delete', deleteImages);

export default router;