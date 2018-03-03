import { Router } from 'express';
import userRoutes from './users/routes';
import productsRoutes from './products/routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/products', productsRoutes);

export default router;
