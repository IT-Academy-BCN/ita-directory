const multer = require("multer");
const {apiResponse} = require("../utils/utils");

//req.file will be undefined in case of .single()

const csvFilter = function (req, file, cb) {
	if (file.mimetype === "text/csv") {
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
			return res.status(400).json(
				apiResponse({
					message: "Error uploading file.",
					errors: err.message,
				})
			);
		} else if (!req.file) {
			return res.status(400).json(
				apiResponse({
					message: "No file provided for upload.",
					errors: "No file provided for upload.",
				})
			);
		} else if (err instanceof multer.MulterError) {
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
//---------------------------------------

//TODO Resolver como vas a modelar lo del id que te llegue, con query param???
// a considerar https://stackoverflow.com/questions/45805890/node-multer-memory-storage-how-to-release-memory
