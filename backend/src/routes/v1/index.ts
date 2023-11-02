import { Router } from 'express';
import userRoutes from './users';

const router = Router();

router.get('/', (req, res) => {
	res.status(200).json({ msg: 'v1 Routes Working' });
});

router.use('/users', userRoutes);

export default router;
