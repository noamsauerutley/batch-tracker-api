import { makeToken } from '../utils/tokenManager';
import User from '../models/User';

export const login = async (req, res) => {
	const { username, password } = req.body;
	const user = await User.findOne({ email });
	const isAuthenticated = await user?.authenticate(password);
	if (!isAuthenticated) throw new Error('Incorrect login credentials');
	res.status(201).json({ token: makeToken(user) });
}