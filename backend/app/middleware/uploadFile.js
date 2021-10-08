const multer = require("multer");
const slugify = require("slugify");
const fs = require("fs");

const allowMimeType = ["image/jpeg", "image/png"];

const extToMime = (type) => {
	return type.indexOf("/") === -1 ? type.split("/")[0] : type;
};

const date = new Date();
const storage = multer.diskStorage({
	destination: `public/${date.getFullYear()}/${date.getMonth()}`,
	filename: (req, file, cb) => {
		cb(null, Date.now() + slugName(file.originalname, destination));
	},
});

const fileFilter = (req, file, cb) => {
	if (allowMimeType.indexOf(file.mimetype) !== -1) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const slugName = (fileName, destination) => {
	const slug = slugify(fileName, {
		replacement: "-",
		remove: undefined,
		lower: false,
		strict: false,
		locale: "en",
		trim: true,
	});
	return checkDupliates(slug, destination);
};

const checkDupliates = (fileName, destination) => {
	var slugIsUnique = true;
	var count = 1;
	const slug;

	do {
		if (fs.existsSync(destination + "/" + fileName)) {
			slugIsUnique = false;
			count++;
			slug = fileName + "-" + count;
		}
	} while (!slugIsUnique);
	
	return slug;
};

module.exports = multer({storage, fileFilter}).single("image");
