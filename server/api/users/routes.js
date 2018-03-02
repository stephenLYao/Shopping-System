import { Router } from 'express';
import { index, logIn, logOut } from './controllers';

const router = Router();

router.post('/', index.post);
router.post('/log-in', logIn.post);
router.post('/log-out', logOut.post);

export default router;
