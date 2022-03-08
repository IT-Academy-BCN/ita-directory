const multer = require("multer");

//req.file will be undefined in case of .single()

const csvFilter = function (req, file, cb) {
	file.mimetype === "text/csv"
		? cb(null, true)
		: cb(new Error("File extension must be CSV"), false);
};

const storage = multer.memoryStorage(); //poner a donde va

const uploadAdCSV = (req, res, next) => {
	// 'some_csv' is the name of our file input field in the HTML form
	const upload = multer({storage, fileFilter: csvFilter}).single("some_csv");

	upload(req, res, (err) => {
		console.log("[1;35m para por el error handler");

		console.log("error::::::", err);
		// req.file contains information of uploaded file
		// req.body contains information of text fields, if there were any

		if (req.fileValidationError) {
			return res.send({errorMessage: err.message});
		}
		if (!req.file) {
			const errNoImage = new Error("Please select an image to upload!");
			return res.send({errorMessage: errNoImage.message});
		}
		if (err instanceof multer.MulterError) {
			return res.send(err);
		}
		if (err) {
			return res.send(err);
		}

		// Display uploaded image for user validation //TODO cambiar esto
		res.send({uploadedFile: req.file.filename});
	});
	console.log("[1;33m sale de la funcion uploadAdCSV");
};

//When using memory storage, the file info will contain a field called buffer that contains the entire file.

//TODO ver limits en la docu

//! uso single o multiple files?
module.exports = uploadAdCSV;

// ver que es esto de fileValidationError!!!!!!!!!!!

//TODO Resolver como vas a modelar lo del id que te llegue, con query param???

//-------------------------------------------------------------------------------------------------

function uploadFile(req, res, next) {
	const upload = multer().single("yourFileNameHere");

	upload(req, res, function (err) {
		if (err instanceof multer.MulterError) {
			// A Multer error occurred when uploading.
		} else if (err) {
			// An unknown error occurred when uploading.
		}
		// Everything went fine.
		next();
	});
}
