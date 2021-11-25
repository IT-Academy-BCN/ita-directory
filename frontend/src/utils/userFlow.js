const EMAIL_REGEX =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*?[A-Z]).{6,}$/;

export const validateEmail = (email) => EMAIL_REGEX.test(email.toLowerCase());
export const validatePassword = (password) => PASSWORD_REGEX.test(password);

export const msgs = {
	Ns: {
		// Notifications
		emailOrPasswordError:
			"Ha habido un error con tu usuario o contraseña. Introdúcelos de nuevo.",
		loginSuccess: "Bienvenido de nuevo. Te estamos redireccionando.",
	},
	emailError: "Introduce un email válido.",
	passwordError: "6 o más caracteres y una Mayúscula.",
	required: "Necesario",
	placeholderEmail: "Email",
	placeholderPassword: "Contraseña",
	recoverPasswordError: "Las contraseñas no coinciden.",
};
