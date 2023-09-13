import { Router } from 'express';
import { registerService } from '../../services/auth.service';
import { IUser } from '../../types';

const authRouter = Router();

authRouter.get('/login', (_, res) => {
	res.send('login endpoint');
});

authRouter.post('/register', (req, res) => {
	const { email, password } = req.body;

	const user: IUser = {
		email,
		password
	};

	const { msg, statusCode } = registerService(user);

	if (statusCode === 200) {
		res.send(msg);
	}
});

export default authRouter;
