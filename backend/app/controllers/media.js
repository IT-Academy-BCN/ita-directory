const uploadFile = require("./../middleware/uploadFile");
const prisma = require("../../prisma/indexPrisma");
const fs = require("fs");

exports.uploadMedia = async (req, res) => {
	try {
		await prisma.media.create({
			data: {
				path: req.file.path,
				mime_type: req.file.mimetype,
				file_size: req.file.size.toString(),
				user: {
					connect: {
						id: parseInt(req.body.userId),
					},
				},
			},
		});
		res.status(200).json({
			path: req.file.path,
			message: "File uploaded successfully.",
		});
	} catch (error) {
		//res.status(500).json({message: error});
		throw new Error(error);
	}
};

exports.deleteMedia = async (req, res) => {
	try {
		await fs.unlink(req.file);
		res.json({message: "File was deleted successfully."});
	} catch (error) {
		res.json({message: `There was an error deleting file. ${error}`});
	}
};
