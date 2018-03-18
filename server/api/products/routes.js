import { Router } from 'express';
import { products } from './controllers';

const router = Router();

router.get('/:category', products.get);
router.post('/', products.post);

export default router;
