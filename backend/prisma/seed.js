const {PrismaClient} = require("@prisma/client");
const {hashPassword} = require("../app/utils/utils");
const prisma = new PrismaClient();

const user_roles = [
	{
		id: 1,
		name: "Admin",
		admin: true,
	},
	{
		id: 2,
		name: "Manager",
		manager: true,
	},
	{
		id: 3,
		name: "Registered",
		registered: true,
	},
];

const user_status = [
	{
		id: 1,
		name: "Active",
		active: true,
	},
	{
		id: 2,
		name: "Pending",
		pending: true,
	},
	{
		id: 3,
		name: "Suspended",
		suspended: true,
	},
	{
		id: 4,
		name: "Deleted",
		deleted: true,
	},
];

const users = [
	{
		id: 1,
		name: "test",
		lastnames: "test test",
		email: "test@test.test",
		user_status: 1,
		user_role: 3,
		password: "test",
	},
];

async function main() {
	for (let i = 0; i < user_roles.length; i++) {
		const ur = user_roles[i];
		await prisma.user_role.upsert({
			where: {id: ur.id},
			update: {},
			create: {
				...ur,
			},
		});
	}

	for (let i = 0; i < user_status.length; i++) {
		const us = user_status[i];
		await prisma.user_status.upsert({
			where: {id: us.id},
			update: {},
			create: {
				...us,
			},
		});
	}

	// @todo: fix by students
	// for (let i = 0; i < users.length; i++) {
	// 	const user = users[i];
	// 	await prisma.user.upsert({
	// 		where: {id: user.id},
	// 		update: {},
	// 		create: {
	// 			...user,
	// 			password: await hashPassword(user.password),
	// 		},
	// 	});
	// }
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
