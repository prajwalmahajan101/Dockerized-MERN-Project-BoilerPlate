import { Router } from 'express';
import User from '../../models/Users';

const router = Router();

router.get('/', async (req, res) => {
	try {
		// const users = await User.getUsers();
		const users = await User.getUsers();
		res.status(200).json({ users });
	} catch (err) {
		res.status(200).json({ err });
	}
});

router.post('/', async (req, res) => {
	try {
		// const users = await User.getUsers();
		const { email, name } = req.body;
		const user = await User.createUser(email, name);
		res.status(200).json({ user });
	} catch (err) {
		res.status(200).json({ err });
	}
});

export default router;
