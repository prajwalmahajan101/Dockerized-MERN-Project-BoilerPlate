import { db } from '../utils/db';

class User {
	static getUsers = async () => {
		let users = await db.user.findMany({});
		return users;
	};

	static createUser = async (email: string, name: string) => {
		let user = await db.user.create({
			data: {
				email,
				name,
			},
		});
		return user;
	};
}

export default User;
