const multer = require("multer");
const fs = require("fs");

const allowMimeType = ["image/jpeg", "image/png"];

const extToMime = (type) => {
	return type.indexOf("/") === -1 ? type.split("/")[0] : type;
};

const date = new Date();
const dest = `public/${date.getFullYear()}/${date.getMonth() + 1}`;
const storage = multer.diskStorage({
	destination: dest,
	filename: (req, file, cb) => {
		let fileName = file.originalname.split(".").slice(0, -1).join(".");
		let extArray = file.mimetype.split("/");
		let extension = extArray[extArray.length - 1];
		let finalName = titleToSlug(fileName, extension, dest);
		cb(null, finalName);
	},
});

const fileFilter = (req, file, cb) => {
	if (allowMimeType.indexOf(file.mimetype) !== -1) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const checkDupliates = (fileName, ext, destination) => {
	let newName;

	if (fs.existsSync(destination + "/" + fileName + "." + ext)) {
		let lastChar = fileName.substring(fileName.indexOf("-") + 1);
		if (!isNaN(lastChar)) {
			let remNum = lastChar.toString().length;
			fileName = fileName.slice(0, -remNum);
			lastChar++;
			newName = fileName + lastChar;
		} else {
			newName = fileName + "-" + 1;
		}
		return checkDupliates(newName, ext, destination);
	} else {
		newName = fileName + "." + ext;
	}

	return newName;
};

//Function from https://www.kindacode.com/article/how-to-generate-slugs-from-titles-in-node-js/
const titleToSlug = (fileName, ext, destination) => {
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

	return checkDupliates(slug, ext, destination);
};

module.exports = multer({storage, fileFilter}).single("image");
