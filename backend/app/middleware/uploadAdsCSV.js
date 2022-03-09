const multer = require("multer");
const {apiResponse} = require("../utils/utils");

//req.file will be undefined in case of .single()

const csvFilter = function (req, file, cb) {
	if (file.mimetype === "text/csv") {
		console.log("[1;34m 0.1-csvFilter OK ");

		cb(null, true);
	} else {
		console.log("[1;34m 0.1-csvFilter ERROR ");

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
// Tenes problemas cuando subis un .csv , pero que por dentro no lo es! te da un empty buffer, controlar eso! Probablemente controlar los headers es lo que hay que hacer!!!!
//TODO ver limits en la documentacion
// ver que es esto de fileValidationError!!!!!!!!!!!
//TODO Resolver como vas a modelar lo del id que te llegue, con query param???

// a considerar https://stackoverflow.com/questions/45805890/node-multer-memory-storage-how-to-release-memory
