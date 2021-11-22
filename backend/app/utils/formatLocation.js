function formatLocation(str) {
    const noArticles = str.replace(/l'|la\s|los\s|els\s|las\s|les\s/gi, "")
    return noArticles.toLowerCase().replace(/(?:^|[\s-/])\w/g, function (match) {
        return match.toUpperCase()
    });
}


module.exports = {formatLocation}