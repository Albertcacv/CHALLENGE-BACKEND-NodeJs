import { IUser } from '../types';
import { validateEmail } from '../utils';

export const registerService = (user: IUser) => {
	const response = {
		msg: 'User has been saved',
		statusCode: 200
	};

	const { email, password } = user;

	//validaciones
	//Comprobar que el formato es adecuado
	if (!validateEmail(email)) {
		response.statusCode = 401;
		return response;
	}

	//guardar el usuario

  

	return response;
};
