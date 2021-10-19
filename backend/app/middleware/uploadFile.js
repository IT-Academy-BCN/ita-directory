const multer = require("multer");
const fs = require("fs");

const allowMimeType = ["image/jpeg", "image/png"];

const extToMime = (type) => {
	return type.indexOf("/") === -1 ? type.split("/")[0] : type;
};

const date = new Date();
const storage = multer.diskStorage({
	destination: `public/${date.getFullYear()}/${date.getMonth()}`,
	filename: (req, file, cb) => {
		cb(null, Date.now() + titleToSlug(file.originalname, destination));
	},
});

const fileFilter = (req, file, cb) => {
	if (allowMimeType.indexOf(file.mimetype) !== -1) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const checkDupliates = (fileName, destination) => {
	let newName;

	if (fs.existsSync(destination + "/" + fileName)) {
		let lastChar = fileName.charAt(fileName.length - 1);
		if (!isNaN(lastChar)) {
			lastChar++;
			fileName = fileName.slice(0, -1);
			newName = fileName + lastChar;
			checkDupliates(newName);
		} else {
			newName = fileName + "-" + 1;
			checkDupliates(newName);
		}
	} else {
		newName = fileName;
	}

	return newName;
};

//Function from https://www.kindacode.com/article/how-to-generate-slugs-from-titles-in-node-js/
const titleToSlug = (fileName, destination) => {
	let slug;

	slug = fileName.toLowerCase();

	slug = slug.replace(
		/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,
		""
	);

	slug = slug.replace(/ /gi, "-");

	slug = slug.replace(/\-\-\-\-\-/gi, "-");
	slug = slug.replace(/\-\-\-\-/gi, "-");
	slug = slug.replace(/\-\-\-/gi, "-");
	slug = slug.replace(/\-\-/gi, "-");

	slug = "@" + slug + "@";
	slug = slug.replace(/\@\-|\-\@|\@/gi, "");

	return checkDupliates(slug, destination);
};

module.exports = multer({storage, fileFilter}).single("image");
