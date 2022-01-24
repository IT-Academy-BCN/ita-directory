const contactController = async (req, res) => {
	const data = req.body;

	for (var key in data) {
		if (data.hasOwnProperty(key)) {
			if (!data[key]) {
				res.status(400).json({
					msg: "Error, no data",
				});
				return;
			}
		}
	}

	res.status(200).json({
		msg: "Message received",
	});
};

module.exports = {
	contactController,
};
