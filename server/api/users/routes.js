import { Router } from 'express';
import { index, logIn } from './controllers';

const router = Router();

router.post('/', index.post);
router.post('/log-in', logIn.post);

export default router;
