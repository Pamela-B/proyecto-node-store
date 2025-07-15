import {Router} from 'express';
import * as productsController from '../controllers/products.controller.js';
const router = Router();

router.get('/', productsController.getAllProducts)
router.get('/:id', productsController.getProductById)


export default router;