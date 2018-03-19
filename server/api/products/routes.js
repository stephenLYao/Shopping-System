import { Router } from 'express';
import { products, getProductsAllCounts, getProductsList } from './controllers';

const router = Router();

router.get('/counts', getProductsAllCounts);
router.get('/lists', getProductsList);
router.get('/:category', products.get);
router.post('/img', products.postImg);
router.post('/', products.post);

export default router;
