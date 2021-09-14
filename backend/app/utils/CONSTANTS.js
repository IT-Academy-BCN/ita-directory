// Internal modules
const prisma = require("./../../prisma/indexPrisma");

let CONSTANTS = undefined;

async function loadConstants() {
	try {
		const user_role = await prisma.user_role.findMany();
		const user_status = await prisma.user_status.findMany();
		// console.log(user_role, user_status);
		CONSTANTS = {user_role, user_status};
	} catch (err) {
		console.error(err);
	}
}

function setConstants() {
	loadConstants();
}

function getConstants() {
	return CONSTANTS;
}

module.exports = {
	loadConstants,
	getConstants,
	setConstants,
	CONSTANTS,
};
