const multer = require("multer");

const allowMimeType = ["image/jpeg", "image/png"];

const extToMime = (type) => {
	return type.indexOf("/") === -1 ? type.split("/")[0] : type;
};

const date = new Date();
const storage = multer.diskStorage({
	destination: `public/${date.getFullYear()}/${date.getMonth()}`,
	filename: (req, file, cb) => {
		cb(null, Date.now() + file.originalname);
	},
});

const fileFilter = (req, file, cb) => {
	if (allowMimeType.indexOf(file.mimetype) !== -1) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

module.exports = multer({storage, fileFilter}).single("image");
