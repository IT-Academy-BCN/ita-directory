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
