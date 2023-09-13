import { DataTypes } from 'sequelize';
import { sequelize } from '../../connections/sequelize/config';

export const Movie = sequelize.define('Movie', {
	image: {
		type: DataTypes.STRING,
		allowNull: false
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false
	},
	createdAt: {
		type: DataTypes.DATE,
		allowNull: false
	},
	rating: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	characters: {
		type: DataTypes.ARRAY
	}
});
