const multer = require("multer");

//req.file will be undefined in case of .single()

const csvFilter = function (req, file, cb) {
	console.log("[1;34m 0-PASA POR csvFilter ");
	if (file.mimetype === "text/csv") {
		console.log("[1;34m 0.1-csvFilter OK ");

		cb(null, true);
	} else {
		console.log("[1;34m 0.1-csvFilter ERROR ");

		cb(new Error("File extension must be CSV"), false);
	}
};

const storage = multer.memoryStorage(); //poner a donde va

const uploadAdCSV = multer({storage, fileFilter: csvFilter}).single("some_csv");

//When using memory storage, the file info will contain a field called buffer that contains the entire file.

module.exports = uploadAdCSV;

//---------------------------------------

//TODO ver limits en la docu
// ver que es esto de fileValidationError!!!!!!!!!!!
//! uso single o multiple files?
//TODO Resolver como vas a modelar lo del id que te llegue, con query param???
