const jwt = require("jsonwebtoken");
const Hashids = require("hashids");
const {apiResponse} = require("../utils/utils");

const authenticateToken = async (req, res, next) => {
	const hashids = new Hashids(process.env.HASH_ID_SECRET, 10);

	try {
		const authHeader = req.headers["authorization"];
		const token = authHeader && authHeader.split(" ")[1];

		//console.log("tokern recibido", token);
		if (!token) return res.status(401).json({msg: "No Token"});
		jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
			if (err) {
				return res.status(401).json(apiResponse({message: "Token has expired!"}));
			} else {
				const hashedId = payload.sub.user_id;
				const dehashedId = hashids.decode(hashedId);
				const userId = dehashedId[0];
				//console.log("userId", userId);
				req.userId = userId;
				next();
			}
		});
	} catch (err) {
		res.status(500).json({err});
	}
};

module.exports = authenticateToken;
