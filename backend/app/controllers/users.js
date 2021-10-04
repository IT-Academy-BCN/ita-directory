// External modules
const JWT = require("jsonwebtoken");
const argon2 = require("argon2");
const {getRedisClient} = require("../utils/initRedis");
const Hashids = require("hashids");
const {
	apiResponse,
	signToken,
	signRefreshToken,
	registerSchema,
	hashPassword,
} = require("../utils/utils");
const prisma = require("../../prisma/indexPrisma");

// Refresh token
exports.getRefreshToken = (req, res, next) => {
	let refreshToken = req.headers.refresh;

	if (!refreshToken) {
		//return res.status(400).json(apiResponse({message: "refresh token missing"}));
		return next({
			code: "error",
			message: "refresh token missing",
			statusCode: 400,
		});
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

				return res.status(200).json(
					apiResponse({
						data: {
							accessToken: accessToken,
						},
					})
				);
			} catch (err) {
				/*res.status(500).json(
					apiResponse({
						message: "Internal server error",
						error: [err.message],
					})
				);*/
				return next({
					code: "error",
					message: "Internal server error",
					statusCode: 500,
				});
			}
		}
	);
};

// Get token
exports.getToken = async (req, res, next) => {
	const idUser = "100001";
	const accessToken = signToken(idUser);
	try {
		const refreshToken = await signRefreshToken(idUser);
		return res.status(200).json(
			apiResponse({
				message: "Your token",
				data: {accessToken: accessToken, refreshToken: refreshToken},
			})
		);
	} catch (err) {
		/*res.status(500).json(
			apiResponse({
				message: "Internal server error",
				error: [err.message],
			})
		);*/
		return next({
			code: "error",
			message: "Internal server error",
			statusCode: 500,
		});
	}
};

// Get User (/v1/get_me endPoint)
exports.getUser = async (req, res, next) => {
	// Check that the request isn't empty
	if (!req.body) {
		return next({
			code: "error",
			message: "Request is empty.",
			statusCode: 400,
		});
	}
	try {
		const USER = await prisma.user.findUnique({where: {id: parseInt(req.body.id)}});
		console.log("user", USER);
		if (USER === null) {
			return next({
				code: "error",
				success: "false",
				message: "user not found",
				statusCode: 204,
			});
		} else {
			return res.status(200).json({
				// Cambiar por el método API RESPONSE
				success: "true",
				name: USER.name,
				lastnames: USER.lastnames,
			});
		}
	} catch (err) {
		console.error(err);
		return next({
			code: "error",
			message: "Some error ocurred while retrieving your account.",
			statusCode: 500,
		});
	}
};

//User signup
exports.registerUser = async (req, res, next) => {
	try {
		//Checking if valid email, password and privacy policy.
		const {...userDTO} = req.body;
		const validFields = await registerSchema.validateAsync(userDTO);

		const doesExist = await prisma.user.findUnique({where: {email: req.body.email}});

		if (doesExist !== null) {
			return next({
				code: "error",
				header: "Invalid email",
				message: "This email has already been registered.",
				statusCode: 400,
			});
		}
		const {privacy, ...userDTO2} = req.body;
		//Creating user without name or lastnames
		const passwordHashed = await hashPassword(req.body.password);
		const newUser = await prisma.user.create({
			data: {
				email: req.body.email,
				password: passwordHashed,
				user_status_id: 1,
				user_role_id: 3,
				refresh_token: "20",
			},
		});
		/*res.status(200).json(
			apiResponse({
				message: "User registered correctly.",
			})
		);*/
		return res.status(200).json(
			apiResponse({
				message: "User registered correctly.",
			})
		);
	} catch (err) {
		if (err.isJoi === true) {
			return next({
				code: "error",
				message: "Some error ocurred while creating your account.",
				statusCode: 422,
			});
		}
		console.error(err);
		/*res.status(500).json(
			apiResponse({
				message: "Some error ocurred while creating your account.",
				errors: err.message,
			})
		);*/
		return next({
			code: "error",
			message: "Some error ocurred while creating your account.",
			statusCode: 500,
		});
	}
};

//get all users (FOR TESTING PURPOSE)
exports.getAllUsers = async (req, res, next) => {
	try {
		const users = await prisma.user.findMany();
		return res.status(200).json(users);
	} catch (err) {
		console.error(err);
		return next({
			code: "error",
			message: "Some error ocurred while retrieving your account.",
			statusCode: 500,
		});
	}
};

// Login
exports.login = async (req, res, next) => {
	const {body = {}} = req;
	// Check that the request isn't empty

	if (!body.email || !body.password) {
		const message = "Content can not be empty!";
		return next({
			code: "error",
			message,
			statusCode: 400,
		});
	}

	try {
		const USER = await prisma.user.findUnique({
			where: {email: body.email},
		});

		if (!USER) {
			return next({
				code: "error",
				header: "User doesn't exist",
				message: "There's no user with that email, please try again or get in touch.",
				statusCode: 200,
			});
		}

		let value = await argon2.verify(USER.password, body.password);

		if (value == false) {
			return next({
				code: "error",
				header: "Wrong password",
				message:
					"The password you introduced is incorrect, please try again or try to recover your password.",
				statusCode: 200,
			});
		} else {
			const token = signToken(USER.id);
			const refreshToken = signRefreshToken(USER.id);
			return res.status(200).json({
				code: "success",
				header: "Welcome back",
				message: "We are redirecting you to your account.",
				token,
				refreshToken,
			});
		}
	} catch (err) {
		return next(new Error(err));
	}
};
//Update role to user with id_user & id_role (FOR TESTING PURPOSE)
exports.updateUserRole = async (req, res, next) => {
	if (!req.body) {
		//res.status(400).send("Request is empty.");
		return next({
			code: "error",
			message: "Request is empty",
			statusCode: 400,
		});
	}
	try {
		const user = await prisma.user.update(
			{user_role_id: req.body.user_role_id},
			{where: {id: req.body.user_id}}
		);
		if (user === null) {
			/*res.status(204).json({
				success: "false",
				message: "user not found",
			});*/
			return next({
				code: "error",
				success: "false",
				message: "user not found",
				statusCode: 204,
			});
		} else {
			//make update & return data

			return res.status(200).json({
				success: "true",
				name: user.name,
				lastnames: user.lastnames,
				user_role_id: user.user_role_id,
			});
		}
	} catch (err) {
		console.error(err);
		return next({
			code: "error",
			message: "Some error ocurred while retrieving your account.",
			statusCode: 500,
		});
	}
};

//Update some user field with id_user & newfield (FOR TESTING PURPOSE)
exports.updateUser = async (req, res, next) => {
	const {user_id, user_role_id, user_status_id} = req.body;
	if (!user_id) {
		/*res.status(400).json(
			apiResponse({
				message: "user_id not defined",
			})
		);*/
		return next({
			code: "error",
			message: "user_id not identified",
			statusCode: 400,
		});
	}

	if (!user_role_id && !user_status_id) {
		/*res.status(400).json(
			apiResponse({
				message: "undefined values",
			})
		);*/
		return next({
			code: "error",
			message: "undefined values",
			statusCode: 400,
		});
	}

	try {
		const user = await prisma.user.update({...req.body}, {where: {id: req.body.user_id}});
		if (user === null) {
			/*res.status(204).json(
				apiResponse({
					message: "User not Found.",
				})
			);*/
			return next({
				code: "error",
				message: "User not found.",
				statusCode: 204,
			});
		} else {
			// return data
			return res.status(200).json(
				apiResponse({
					message: "User updated successfully",
				})
			);
		}
	} catch (err) {
		console.error(err);
		return next({
			code: "error",
			message: "Some error ocurred while retrieving your account.",
			statusCode: 500,
		});
	}
};

// Delete user
exports.deleteUser = async (req, res, next) => {
	// Check that the request isn't empty
	if (!req.user) {
		return next({
			code: "error",
			message: "User not found",
			statusCode: 404,
		});
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
			return res.status(200).json(userModel);
		} else {
			return next({
				code: "error",
				message: "User not found",
				statusCode: 404,
			});
		}
	} catch (err) {
		console.error(err);
		return next({
			code: "error",
			message: "Some error occurred while retrieving your account.",
			statusCode: 505,
		});
	}
};

exports.forgetPassword = async (req, res, next) => {
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
			return res.status(200).json({
				code: "success",
				header: "Forget Pass succesful url temp",
				message: "You have succesfuly forget Pass succesful url temp.",
				hash: encodeURI(new Buffer(token).toString("base64")), // cambiar
			});
		} else {
			return next({
				code: "error",
				header: "user",
				message: "Email not found.",
				statusCode: 404,
			});
		}
	} catch (err) {
		console.log(err);
		return next({
			code: "error",
			message: "Some error ocurred.",
			statusCode: 500,
		});
	}
};

exports.receiveEmailGetToken = async (req, res, next) => {
	try {
		const user = req.body.email;

		const passUser = await prisma.user.findUnique({
			where: {
				email: user,
			},
		});

		if (passUser) {
			const accessToken = signToken(passUser, "1h");

			return res.status(200).json(
				apiResponse({
					message: "Access token granted.",
					data: accessToken,
				})
			);
		} else {
			/*res.status(404).json(
				apiResponse({
					message: "User not found.",
				})
			);*/
			return next({
				code: "error",
				message: "User not found.",
				statusCode: 404,
			});
		}
	} catch (err) {
		console.log(err);
		/*res.status(500).json(
			apiResponse({
				message: "An error occurred with your query.",
				errors: err.message,
			})
		);*/
		return next({
			code: "error",
			message: "An error occurred with your query.",
			statusCode: 500,
		});
	}
};

exports.recoverPassword = async (req, res, next) => {
	try {
		const token = req.params.token;

		if (!token) {
			/*res.status(401).json(
				apiResponse({
					message: "Your token is empty.",
				})
			);*/
			return next({
				code: "error",
				message: "Your token is empty",
				statusCode: 401,
			});
		}

		JWT.verify(token, process.env.JWT_SECRET, (err) => {
			if (err) {
				/*res.status(401).json(
					apiResponse({
						message: "Your token has expired!",
						errors: err.message,
					})
				);*/
				return next({
					code: "error",
					message: "Your token has expired!",
					statusCode: 401,
				});
			}

			res.status(200).json(
				apiResponse({
					message: "Authorization granted to change your password.",
				})
			);
		});
	} catch (err) {
		console.log(err);
		/*res.status(500).json(
			apiResponse({
				message: "An error ocurred.",
				errors: err.message,
			})
		);*/
		return next({
			code: "error",
			message: "An error occurred.",
			statusCode: 500,
		});
	}
};

exports.changePassword = async (req, res, next) => {
	try {
		const {password, email} = req.body;

		// Create hook for update password?
		const hashedPassword = await argon2.hash(password, {
			type: argon2.argon2id,
			memoryCost: 15360,
			timeCost: 2,
			parallelism: 1,
		});

		await prisma.user.update({
			where: {
				email: email,
			},
			data: {
				password: hashedPassword,
			},
		});

		res.status(200).json(
			apiResponse({
				message: "You password has been successfully changed.",
			})
		);
	} catch (err) {
		/*res.status(500).json(
			apiResponse({
				message: "An error occurred.",
				errors: err.message,
			})
		);*/
		return next({
			code: "error",
			message: "An error occurred.",
			statusCode: 500,
		});
	}
};
