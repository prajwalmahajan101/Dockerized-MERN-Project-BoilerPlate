import {Router} from 'express';
import User from '../../models/Users';

const router = Router();

router.get('/', async (req, res) => {
	try {
		// const users = await User.getUsers();
		const users = await User.getUsers();
		res.status(200).json({status: true, msg: "Fetched User List", data: {users}});
	} catch (err) {
		res.status(200).json({status: false, msg: "Error User List", error: {err}});
	}
});

router.post('/', async (req, res) => {
	try {
		// const users = await User.getUsers();
		const { email, name } = req.body;
		const user = await User.createUser(email, name);
		res.status(200).json({status: true, msg: "Created User", data: {user}});
	} catch (err) {
		res.status(200).json({ err });
	}
});

export default router;
