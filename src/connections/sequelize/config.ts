import { configDotenv } from 'dotenv';
import { Sequelize } from 'sequelize';

configDotenv();

const USER = process.env.POSTGRE_DB_USER;
const PASSWORD = process.env.POSTGRE_DB_PASSWORD;

const DBNAME = process.env.POSTGRE_DB_NAME;

export const sequelize = new Sequelize(
	DBNAME as string,
	USER as string,
	PASSWORD,
	{
		host: 'localhost',
		dialect: 'postgres',
		logging: (...msg) => console.log(msg)
	}
);
