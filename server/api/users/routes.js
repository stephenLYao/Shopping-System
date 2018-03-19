import { Router } from 'express';
import { index, logIn, logOut, getUserCounts, getUserLists } from './controllers';

const router = Router();

router.post('/', index.post);
router.post('/log-in', logIn.post);
router.post('/log-out', logOut.post);
router.get('/counts', getUserCounts);
router.get('/lists', getUserLists);

export default router;
