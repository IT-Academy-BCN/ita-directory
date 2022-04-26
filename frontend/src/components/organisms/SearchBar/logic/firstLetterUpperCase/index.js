export const firstLetterUpperCase = (word) => {
	try {
		if (word) {
			return word.charAt(0).toUpperCase() + word.slice(1);
		}
	} catch (error) {
		console.error(error);
	}
};
