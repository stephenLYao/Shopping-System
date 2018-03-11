import { Router } from 'express';
import userRoutes from './users/routes';
import productsRoutes from './products/routes';
import adminRoutes from './admin/index';

const router = Router();

router.use('/users', userRoutes);
router.use('/products', productsRoutes);

router.use('/admin', adminRoutes);

export default router;
