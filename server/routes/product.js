import express from 'express'
import { addProduct, deleteProduct, editProduct } from '../controllers/product';

const router = express.Router();




router.post('/editProduct', editProduct);
router.post('/addProduct', addProduct);
router.delete('delete', deleteProduct)

export default router;