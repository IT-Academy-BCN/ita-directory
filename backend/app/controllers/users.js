// External modules
const JWT = require("jsonwebtoken");
const argon2 = require("argon2");
const {getRedisClient} = require("../utils/initRedis");
const Hashids = require("hashids");
const {apiResponse, signToken, signRefreshToken, registerSchema} = require("../utils/utils");
const prisma = require("../../prisma/indexPrisma");

// Refresh token
exports.getRefreshToken = (req, res) => {
	let {refreshToken} = req.body;
	if (!refreshToken) {
		return res.status(400).json(apiResponse({message: "refresh token missing"}));
	}
	JWT.verify(
		refreshToken,
		process.env.JWT_REFRESH_TOKEN_SECRET,
		{ignoreExpiration: true},
		async (err, payload) => {
			try {
				if (err) return res.sendStatus(401);
				const hashedId = payload.sub.user_id;
				const hashids = new Hashids(process.env.HASH_ID_SECRET, 10);
				const dehashedId = hashids.decode(hashedId);
				const userId = dehashedId[0];

				const result = await getRedisClient().get(userId);
				if (refreshToken !== result) {
					const counterKey = `C${userId}`;
					await getRedisClient().incr(counterKey);
					return res.sendStatus(401);
				}
				const accessToken = signToken(userId);
				refreshToken = await signRefreshToken(userId);
				res.status(200).json(
					apiResponse({
						data: {
							accessToken: accessToken,
							refreshToken: refreshToken,
						},
					})
				);
			} catch (err) {
				res.status(500).json(
					apiResponse({
						message: "Internal server error",
						error: [err.message],
					})
				);
			}
		}
	);
};

// Get token
exports.getToken = async (req, res) => {
	const idUser = "100001";
	const accessToken = signToken(idUser);
	try {
		const refreshToken = await signRefreshToken(idUser);
		res.status(200).json(
			apiResponse({
				message: "Your token",
				data: {accessToken: accessToken, refreshToken: refreshToken},
			})
		);
	} catch (err) {
		res.status(500).json(
			apiResponse({
				message: "Internal server error",
				error: [err.message],
			})
		);
	}
};

// Get User (/v1/get_me endPoint)
exports.getUser = async (req, res) => {
	// Check that the request isn't empty
	if (!req.body) {
		res.status(400).send("Request is empty.");
	}
	try {
		const USER = await prisma.user.findUnique({where: {id: parseInt(req.body.id),},});
		console.log("user", USER);
		if (USER === null) {
			res.status(204).json({
				success: "false",
				message: "user not found",
			});
		} else {
			res.status(200).json({
				// Cambiar por el método API RESPONSE
				success: "true",
				name: USER.name,
				lastnames: USER.lastnames,
			});
		}
	} catch (err) {
		console.error(err);
		res.status(500).send({
			message: err.message || "Some error ocurred while retrieving your account.",
		});
	}
};

//User signup
exports.registerUser = async (req, res) => {
	try {
		//Checking if valid email, password and privacy policy.
		const {name, lastnames, ...userDTO} = req.body;
		const validFields = await registerSchema.validateAsync(userDTO);

		const doesExist = await prisma.user.findOne({where: {email: req.body.email}});
		if (doesExist !== null) {
			res.status(400).json(
				apiResponse({
					message: "This email has already been registered.",
					errors: "Invalid email.",
				})
			);
		}
		const {privacy, ...userDTO2} = req.body;
		const newUser = await prisma.user.create({...req.body});
		res.status(200).json(
			apiResponse({
				message: "User registered correctly.",
			})
		);
	} catch (err) {
		if (err.isJoi === true) {
			res.status(422).json(
				apiResponse({
					message: "Some error ocurred while creating your account.",
					errors: err.message,
				})
			);
		}
		console.error(err);
		res.status(500).json(
			apiResponse({
				message: "Some error ocurred while creating your account.",
				errors: err.message,
			})
		);
	}
};

//get all users (FOR TESTING PURPOSE)
exports.getAllUsers = async (req, res) => {
	try {
		const users = await prisma.user.findMany();
		res.status(200).json(users);
	} catch (err) {
		console.error(err);
		res.status(500).send({
			message: err.message || "Some error ocurred while retrieving your account.",
		});
	}
};

// Login
exports.login = async (req, res) => {
	const name = req.body.name;
	const email = req.body.username;
	const password = req.body.password;
	// Check that the request isn't empty
	if (!email || !password) {
		res.status(400).send({
			code: "error",
			message: "Content can not be empty!",
		});
		return;
	}

	try {
		const USER = await prisma.mec_user.findOne({
			attributes: ["id", "mec_pwd"],
			where: prisma.sequelize.where(
				prisma.sequelize.fn("lower", prisma.sequelize.col("mec_un")),
				prisma.sequelize.fn("lower", email)
			),
		});

		if (!USER) {
			res.status(200).send({
				code: "error",
				header: "User doesn't exist",
				message: "There's no user with that email, please try again or get in touch.",
			});
			return;
		}

		let value = await USER.validatePassword(password, USER.mec_pwd);

		if (!value) {
			res.status(200).send({
				code: "error",
				header: "Wrong password",
				message:
					"The password you introduced is incorrect, please try again or try to recover your password.",
			});
		} else {
			const token = signToken(USER.id);
			res.status(200).send({
				code: "success",
				header: "Welcome back",
				message: "We are redirecting you to your account.",
				token,
			});
		}
	} catch (err) {
		console.log(err);
		res.status(500).send({
			code: "error",
			message: err.message || "Some error ocurred while retrieving your account.",
		});
	}
};

//Update role to user with id_user & id_role (FOR TESTING PURPOSE)
exports.updateUserRole = async (req, res) => {
	if (!req.body) {
		res.status(400).send("Request is empty.");
	}
	try {
		const user = await prisma.user.update(
			{user_role_id: req.body.user_role_id},
			{where: {id: req.body.user_id}}
		);
		if (user === null) {
			res.status(204).json({
				success: "false",
				message: "user not found",
			});
		} else {
			//make update & return data

			res.status(200).json({
				success: "true",
				name: user.name,
				lastnames: user.lastnames,
				user_role_id: user.user_role_id,
			});
		}
	} catch (err) {
		console.error(err);
		res.status(500).send({
			message: err.message || "Some error ocurred while retrieving your account.",
		});
	}
};

//Update some user field with id_user & newfield (FOR TESTING PURPOSE)
exports.updateUser = async (req, res) => {
	const {user_id, user_role_id, user_status_id} = req.body;
	if (!user_id) {
		res.status(400).json(
			apiResponse({
				message: "user_id not defined",
			})
		);
	}

	if (!user_role_id && !user_status_id) {
		res.status(400).json(
			apiResponse({
				message: "undefined values",
			})
		);
	}

	try {
		const user = await prisma.user.update({...req.body}, {where: {id: req.body.user_id}});
		if (user === null) {
			res.status(204).json(
				apiResponse({
					message: "User not Found.",
				})
			);
		} else {
			// return data
			res.status(200).json(
				apiResponse({
					message: "User updated successfully",
				})
			);
		}
	} catch (err) {
		console.error(err);
		res.status(500).send({
			message: err.message || "Some error ocurred while retrieving your account.",
		});
	}
};

// Delete user
exports.deleteUser = async (req, res) => {
	// Check that the request isn't empty
	if (!req.user) {
		res.status(404).send("User not found.");
	}
	try {
		const userModel = await prisma.mec_user.findOne({
			raw: true,
			nest: true,
			attributes: {
				exclude: ["mec_pwd", "password_change"],
			},
			include: [
				{
					model: prisma.profile,
					attributes: ["id"],
				},
				{
					model: prisma.mecuser_people,
				},
				{model: prisma.people},
			],
			where: {id: req.user.uid},
		});

		if (userModel) {
			if (userModel.person.picture) {
				userModel.person.picture = Buffer.from(userModel.person.picture).toString("base64");
			}
			res.status(200).json(userModel);
		} else {
			res.status(404).json({
				message: "User not found.",
			});
		}
	} catch (err) {
		console.error(err);
		res.status(500).send({
			message: err.message || "Some error ocurred while retrieving your account.",
		});
	}
};

exports.forgetPassword = async (req, res) => {
	const {email} = req.body;
	try {
		const user = await prisma.mec_user.findOne({where: {mec_un: email}});
		if (user) {
			const token = JWT.sign(
				{
					iss: "itacademy",
					sub: {
						email,
					},
					iat: new Date().getTime(),
					exp: new Date().setDate(new Date().getMinutes() + 20), // Expires in 20 Minutes
				},
				process.env.JWT_SECRET
			);
			await prisma.password_recovery_log.create({
				id_mec_user: user.id,
				recovery_date: new Date(),
				recovery_active: true,
				token_id: token,
				password_old: user.password,
			});
			res.status(200).json({
				code: "success",
				header: "Forget Pass succesful url temp",
				message: "You have succesfuly forget Pass succesful url temp.",
				hash: encodeURI(new Buffer(token).toString("base64")), // cambiar
			});
		} else {
			res.status(404).send({
				code: "not-found",
				header: "user",
				message: "Email not found.",
			});
		}
	} catch (err) {
		console.log(err);
		res.status(500).send({
			message: err.message || "Some error ocurred.",
		});
	}
};

exports.receiveEmailGetToken = async (req, res) => {
	try {
		const {user} = req.body;

		const passUser = await prisma.user.findOne({
			where: {
				email: user,
			},
		});

		if (passUser) {
			const accessToken = signToken(passUser, "1h");

			res.status(200).json(
				apiResponse({
					message: "Access token granted.",
					data: accessToken,
				})
			);
		} else {
			res.status(404).json(
				apiResponse({
					message: "User not found.",
				})
			);
		}
	} catch (err) {
		console.log(err);
		res.status(500).json(
			apiResponse({
				message: "An error occurred with your query.",
				errors: err.message,
			})
		);
	}
};

exports.recoverPassword = async (req, res) => {
	try {
		const token = req.params.token;

		if (!token) {
			res.status(401).json(
				apiResponse({
					message: "Your token is empty.",
				})
			);
		}

		JWT.verify(token, process.env.JWT_SECRET, (err, authData) => {
			if (err) {
				res.status(401).json(
					apiResponse({
						message: "Your token has expired!",
						errors: err.message,
					})
				);
			}

			res.status(200).json(
				apiResponse({
					message: "Authorization granted to change your password.",
				})
			);
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(
			apiResponse({
				message: "An error ocurred.",
				errors: err.message,
			})
		);
	}
};

exports.changePassword = async (req, res) => {
	try {
		const {password, user} = req.body;

		// Create hook for update password?
		const hashedPassword = await argon2.hash(password, {
			type: argon2.argon2id,
			memoryCost: 15360,
			timeCost: 2,
			parallelism: 1,
		});

		const passUser = await prisma.user.findOne({
			where: {
				email: user,
			},
		});

		passUser.password = hashedPassword;
		passUser.save();

		res.status(200).json(
			apiResponse({
				message: "You password has been successfully changed.",
			})
		);
	} catch (err) {
		res.status(500).json(
			apiResponse({
				message: "An error occurred.",
				errors: err.message,
			})
		);
	}
};
