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

const checkDupliates = (fileName, ext, destination, dup) => {
	let newName;

	if (fs.existsSync(destination + "/" + fileName + "." + ext)) {
		//let lastChar = fileName.slice(-1);
		if (dup > 0) {
			let remNum = dup.toString().length;
			fileName = fileName.slice(0, -remNum);
			dup++;
			newName = fileName + dup;
		} else {
			dup++;
			newName = fileName + "-" + dup;
		}
		return checkDupliates(newName, ext, destination, dup);
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

	return checkDupliates(slug, ext, destination, 0);
};

module.exports = multer({storage, fileFilter}).single("image");
