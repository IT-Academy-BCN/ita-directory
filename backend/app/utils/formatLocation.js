function formatLocation(str) {
	const noArticles = str.replace(/l'|la\s|los\s|els\s|las\s|les\s/gi, "");
	const accents = /[\u00C0-\u024F\u1E00-\u1EFF]/gi;
	if (noArticles[0].match(accents)) {
		return noArticles.charAt(0).toUpperCase() + noArticles.slice(1);
	} else {
		return noArticles.toLowerCase().replace(/(?:^|[\s-/])\w/g, function (match) {
			return match.toUpperCase();
		});
	}
}

module.exports = {formatLocation};
