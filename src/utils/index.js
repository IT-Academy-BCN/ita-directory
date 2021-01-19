import axios from "axios";

export const refresh = () => {
	window.location.reload();
};

export const redirectHome = () => {
	document.location.href = "/";
};

export const logout = () => {
	localStorage.removeItem("itacademy");
	refresh();
	return;
};

const login = (data) => {
	try {
		const response;
	} catch (err) {
		console.log(err);
	}
};
