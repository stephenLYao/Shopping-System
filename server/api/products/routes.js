import { Router } from 'express';
import { products } from './controllers';

const router = Router();

router.get('/:tag', products.get);

export default router;
