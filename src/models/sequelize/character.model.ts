import { DataTypes } from 'sequelize';
import { sequelize } from '../../connections/sequelize/config';

export const Character = sequelize.define('Character', {
	image: {
		type: DataTypes.STRING,
		allowNull: false
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	age: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	weight: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	story: {
		type: DataTypes.STRING,
		allowNull: false
	},
	movies: {
		type: DataTypes.ARRAY
	},
	series: {
		type: DataTypes.ARRAY
	}
});
