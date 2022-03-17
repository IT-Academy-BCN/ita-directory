const multer = require("multer");
const {apiResponse} = require("../utils/utils");

const csvFilter = function (req, file, cb) {
	const filetypes = /csv/;
	const mimetypeREGEX =
		/text\/plain|text\/x-csv|application\/vnd.ms-excel|application\/csv|application\/x-csv|text\/csv|text\/comma-separated-values|text\/x-comma-separated-values|text\/tab-separated-values/;

	const fileExtension = filetypes.test(
		file.originalname.split(".")[file.originalname.split(".").length - 1]
	);
	const mimeType = mimetypeREGEX.test(file.mimetype);

	if (mimeType && fileExtension) {
		cb(null, true);
	} else {
		cb(new Error("File extension must be CSV"), false);
	}
};

const storage = multer.memoryStorage();
const upload = multer({storage, fileFilter: csvFilter}).single("some_csv");

const uploadAdCSV = (req, res, next) => {
	upload(req, res, function (err) {
		//Error Handling
		if (err) {
			console.log("Paso Uno");
			console.log(err);
			return res.status(400).json(
				apiResponse({
					message: "Error uploading file.",
					errors: err.message,
				})
			);
		} else if (!req.file) {
			console.log("Paso Dos");
			return res.status(400).json(
				apiResponse({
					message: "No file provided for upload.",
					errors: "No file provided for upload.",
				})
			);
		} else if (err instanceof multer.MulterError) {
			console.log("Paso Tres");
			return res.status(500).json(
				apiResponse({
					message: "A Multer error occurred when uploading.",
					errors: err.message,
				})
			);
		}
		// Everything went fine

		next();
	});
};
module.exports = {uploadAdCSV};
