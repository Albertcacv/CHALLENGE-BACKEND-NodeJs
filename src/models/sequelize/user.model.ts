import { DataTypes } from 'sequelize';
import { sequelize } from '../../connections/sequelize/config';

export const User = sequelize.define('User', {
	email: {
		type: DataTypes.STRING,
		allowNull: false
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	}
});
