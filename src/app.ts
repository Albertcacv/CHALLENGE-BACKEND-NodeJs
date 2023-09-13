import express from 'express';
import authRouter from './routes/express/auth.routes';

const startApp = async () => {
	const app = express();

	app.use(express.json());

	app.use('/auth/', authRouter);

	return app;
};

export default startApp;
