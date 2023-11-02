import { Router } from 'express';
import userRoutes from './users';

const router = Router();

router.get('/', (req, res) => {
	res.status(500).json({ msg: 'v1 Routes Working',status:false });
});

router.use('/users', userRoutes);

export default router;
