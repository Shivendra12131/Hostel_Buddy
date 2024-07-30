import express from 'express'
import multer from 'multer';
import { addProduct, deleteProduct, editProduct, getProductsMetaData } from '../controllers/product.js';

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });




router.post('/edit', upload.array('images'), editProduct);
router.post('/add', addProduct);
router.delete('/delete', deleteProduct);
router.get('/all', getProductsMetaData);

export default router;