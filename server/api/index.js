import { Router } from 'express';
import userRoutes from './users/routes';
import productsRoutes from './products/routes';
import adminRoutes from './admin/index';
import categoryRoutes from './category/routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/products', productsRoutes);
router.use('/category', categoryRoutes);

router.use('/admin', adminRoutes);

export default router;
