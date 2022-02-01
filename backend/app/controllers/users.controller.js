const JWT = require("jsonwebtoken");
const argon2 = require("argon2");
const Hashids = require("hashids");

const client = require("../utils/initRedis");
const {transporter, mailOptions} = require("../utils/transporterEmail");

const {
	apiResponse,
	signToken,
	signRefreshToken,
	registerSchema,
	hashPassword,
	decodeHash,
} = require("../utils/utils");
const prisma = require("../../prisma/indexPrisma");

// Refresh token

exports.getRefreshToken = (req, res, next) => {
	let refreshToken = req.headers.refresh;

	if (!refreshToken) {
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

				const result = await client.get(userId);
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
				return next(new Error(err));
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
		return next(new Error(err));
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
		return next(new Error(err));
	}
};

//User signup
exports.registerUser = async (req, res, next) => {
	const {name, lastnames, email, password} = req.body;

	const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
	try {
		if (!regex.test(password)) {
			return next({
				code: "error",
				header: "Invalid password",
				message: "This password does not meet the requirements.",
				statusCode: 400,
			});
		}

		//Checking if valid email, password and privacy policy.
		const doesExist = await prisma.user.findUnique({where: {email}});

		if (doesExist !== null) {
			return next({
				code: "error",
				header: "Invalid email",
				message: "This email has already been registered.",
				statusCode: 200,
			});
		}

		//Creating user without name or lastnames
		const passwordHashed = await hashPassword(req.body.password);
		await prisma.user.create({
			data: {
				name,
				lastnames,
				email,
				password: passwordHashed,
				user_status_id: 1,
				user_role_id: 3,
				refresh_token: "20",
			},
		});
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
		return next(new Error(err));
	}
};

//get all users (FOR TESTING PURPOSE)
exports.getAllUsers = async (req, res, next) => {
	try {
		const users = await prisma.user.findMany({
			select: {
				id: true,
				name: true,
				lastnames: true,
				email: true,
				created_at: true,
				updated_at: true,
				user_status_id: true,
				user_role_id: true,
				refresh_token: true,
				media: {
					select: {
						path: true,
					},
				},
			},
		});

		return res.status(200).json(users);
	} catch (err) {
		return next(new Error(err));
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

		const value = await argon2.verify(USER.password, body.password);
		if (value === false) {
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
		return next(new Error(err));
	}
};

//Update some user field with id
exports.updateUser = async (req, res, next) => {
	const {id, user_role_id, user_status_id} = req.body;
	if (!id) {
		res.status(400).json(
			apiResponse({
				message: "User id not defined",
			})
		);
	}

	if (!user_status_id && !user_role_id) {
		res.status(400).json(
			apiResponse({
				message: "Undefined user status or user role",
			})
		);
	}

	// Updating user using id
	try {
		const user = await prisma.user.update({
			where: {id: parseInt(req.body.id)},
			data: {
				...req.body,
			},
		});
		if (user === null) {
			return next({
				code: "error",
				message: "User not found.",
				statusCode: 204, // @todo: 404 error no 204 si no existe
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
		return next(new Error(err));
	}
};

// Delete user
exports.deleteUser = async (req, res, next) => {
	// Check that the request isn't empty
	if (!req.body) {
		return next({
			code: "error",
			message: "User not found",
			statusCode: 404,
		});
	}
	try {
		const userModel = await prisma.user.findOne({
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
			where: {id: req.body.uid},
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
		return next(new Error(err));
	}
};

exports.forgetPassword = async (req, res, next) => {
	const {email} = req.body;
	try {
		const user = await prisma.user.findOne({where: {email}});
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
		return next(new Error(err));
	}
};

exports.receiveEmailGetToken = async (req, res, next) => {
	try {
		const {email} = req.body;
		const user = await prisma.user.findUnique({where: {email}});

		//console.log("user", passUser);
		if (!user) {
			return res.status(404).json(
				apiResponse({
					code: "error",
					message: "Email not found",
				})
			);
		} else {
			const accessToken = signToken(user.id, "1h");

			mailOptions.to = email;
			mailOptions.html = `${process.env.REACT_APP_URL}/change-password/${accessToken}`;

			await transporter.sendMail(mailOptions, (error, info) => {
				if (error) {
					res.status(500).json(error.message);
				} else {
					res.status(200).json({
						//id: info.messageId,
						msg: "Email sent",
					});
				}
			});
		}
	} catch (err) {
		return next(new Error(err));
	}
};

exports.changePassword = async (req, res, next) => {
	try {
		const {password1, password2} = req.body;
		const token = req.params.token;
		const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

		if (password1 != password2) {
			return res.status(200).json(
				apiResponse({
					code: "error",
					message: "The password does not match",
				})
			);
		}

		if (!regex.test(password1)) {
			return next({
				code: "error",
				header: "Invalid password",
				message: "This password does not meet the requirements.",
				statusCode: 400,
			});
		}

		JWT.verify(token, process.env.JWT_SECRET, async (err) => {
			if (err) {
				return res.status(200).json({
					code: "error",
					message: "Something is wrong with the token",
				});
			}
			const decodedToken = JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
			const encodedUserId = decodedToken.sub.user_id;
			let decodedId = decodeHash(encodedUserId);

			const hashedPassword = await hashPassword(password1);

			await prisma.user.update({
				where: {
					id: decodedId[0],
				},
				data: {
					password: hashedPassword,
				},
			});

			return res.status(200).json(
				apiResponse({
					message: "Your password has been successfully changed.",
				})
			);
		});
	} catch (err) {
		return next(new Error(err));
	}
};
