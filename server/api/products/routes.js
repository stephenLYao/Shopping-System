import { Router } from 'express';
import { products } from './controllers';

const router = Router();

router.get('/:category', products.get);
router.post('/', products.post);
router.post('/img', products.postImg);

export default router;
