import { sequelize } from './config';

const connectionToDB = async () => {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established succesfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
};

export default connectionToDB;
