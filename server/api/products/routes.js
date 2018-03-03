import { Router } from 'express';
import { recommends } from './controllers';

const router = Router();

router.get('/recommends', recommends.get);

export default router;
