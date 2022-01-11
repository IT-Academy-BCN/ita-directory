const EMAIL_REGEX =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
const NAME_REGEX = /^[a-z ,.'-]+$/i;

export const validateEmail = (email) => EMAIL_REGEX.test(email.toLowerCase());
export const validatePassword = (password) => PASSWORD_REGEX.test(password);
export const validateName = (name) => NAME_REGEX.test(name);

export const msgs = {
	Ns: {
		// Notifications
		emailOrPasswordError:
			"Ha habido un error con tu usuario o contraseña. Introdúcelos de nuevo.",
		loginSuccess: "Bienvenido de nuevo. Te estamos redireccionando.",
	},
	emailError: "Introduce un email válido.",
	passwordError:
		"Debe contener 6 o más caracteres, un carácter especial (@ $ ! % * # ? &) y al menos un número",
	nameError: "El nombre no puede contener números ni carácteres especiales",
	lastnameError: "El apellido no puede contener números ni carácteres especiales",
	required: "Necesario",
	placeholderEmail: "Email",
	placeholderPassword: "Contraseña",
};
