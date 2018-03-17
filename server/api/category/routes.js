import { Router } from 'express';
import { category } from './controllers';

const router = Router();

router.get('/', category.get);
router.post('/', category.post);

export default router;
