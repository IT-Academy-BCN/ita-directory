const jwt = require("jsonwebtoken");
const {apiResponse} = require("../utils/utils");
const {
	decodeHash
} = require("../utils/utils");

const authenticateToken = (req, res, next) => {
	const authHeader = req.headers["authorization"];
	if (typeof authHeader !== "undefined") {
		const token = authHeader && authHeader.split(" ")[1];
		if (token == null) return res.sendStatus(401);
		jwt.verify(token, process.env.JWT_SECRET, (err, authData) => {
			if (err) return res.status(401).json(apiResponse({message: "Token has expired!"}));
			const hashedId = authData.sub.user_id;
			const dehashedId = decodeHash(hashedId);
			const userId = dehashedId[0];
			req.userId = userId;
			next();
		});
	} else res.sendStatus(403);
};

module.exports = authenticateToken;
