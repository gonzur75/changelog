import { Router } from 'express';

const router =  Router();

router.get('/products', (req: any, res) =>{
    console.log('Trafiony');
    res.json({message: 'yolo'});
});

router.get('/products/:id', () =>{});
router.post('/products', () =>{});
router.put('/products/:id', () =>{});
router.delete('/products/:id', () =>{});

router.get('/udates', () =>{});
router.get('/udates/:id', () =>{});
router.post('/udates', () =>{});
router.put('/udates/:id', () =>{});
router.delete('/udates/:id', () =>{});

export default router;