import { Router } from 'express';
import { logIn, logOut, getUserCounts, getUserLists } from './controllers';

const router = Router();

router.post('/login', logIn.post);
router.post('/logout', logOut.post);

router.get('/counts', getUserCounts);
router.get('/lists', getUserLists);

export default router;
