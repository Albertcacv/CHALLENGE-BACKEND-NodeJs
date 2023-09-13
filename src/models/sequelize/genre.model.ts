import { DataTypes } from 'sequelize';
import { sequelize } from '../../connections/sequelize/config';

export const Genre = sequelize.define('Genre', {
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	image: {
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
