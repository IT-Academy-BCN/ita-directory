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
	var slugIsUnique = true;
	var count = 1;
	let slug;

	do {
		if (fs.existsSync(destination + "/" + fileName)) {
			slugIsUnique = false;
			count++;
			slug = fileName + "-" + count;
		}
	} while (!slugIsUnique);

	return slug;
};

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
