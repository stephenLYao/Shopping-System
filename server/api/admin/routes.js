import { Router } from 'express';
import { logIn, logOut } from './controllers';

const router = Router();

router.post('/login', logIn.post);
router.post('/logout', logOut.post);

export default router;
