import { configDotenv } from 'dotenv';
import startApp from './app';
import connectionToDB from './connections/sequelize/connection';

configDotenv();

const bootstrap = async () => {
	const app = await startApp();

	try {
		await connectionToDB();

		console.log(
			` Server running on port ` +
				app.listen({ port: process.env.SERVER_PORT || 5000 })
		);
	} catch (error) {
		console.error(error);
	}
};

export default bootstrap;
