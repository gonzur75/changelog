import { Router } from 'express';
import { getProducts, getProduct, createProduct, deleteProduct, updateProduct } from './handlers/products';
import { handleInputErrors } from './modules/middleware';
import { body } from 'express-validator';
const router =  Router();


router.get('/products', getProducts);

router.get('/products/:id', getProduct);
router.post(
    '/products', 
    body('name').isString(), 
    handleInputErrors,   
    createProduct
);

router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

router.get('/udates', dupa);
router.get('/udates/:id', () =>{});
router.post('/udates', () =>{});
router.put('/udates/:id', () =>{});
router.delete('/udates/:id', () =>{});

export default router;