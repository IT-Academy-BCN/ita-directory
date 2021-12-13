const argon2 = require("argon2");
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();
const ads = require('./seedFiles/ads')
const ad_types = require('./seedFiles/ad_types')
const levels = require('./seedFiles/levels')
const level_types = require('./seedFiles/level_types')

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
		user_status_id: 1,
		user_role_id: 3,
		password: "Test-test",
		refresh_token: "20",
	},
	{
		id: 2,
		name: "test2",
		lastnames: "test test",
		email: "test2@test.test",
		user_status_id: 1,
		user_role_id: 3,
		password: "test2",
		refresh_token: "20",
	},
	{
		id: 3,
		name: "test3",
		lastnames: "test test",
		email: "test3@test.test",
		user_status_id: 1,
		user_role_id: 3,
		password: "test3",
		refresh_token: "20",
	},
	{
		id: 4,
		name: "test4",
		lastnames: "test test",
		email: "test4@test.test",
		user_status_id: 1,
		user_role_id: 3,
		password: "test4",
		refresh_token: "20",
	},
	{
		id: 5,
		name: "test5",
		lastnames: "test test",
		email: "test5@test.test",
		user_status_id: 1,
		user_role_id: 3,
		password: "test5",
		refresh_token: "20",
	},
];


const medias = [
	{
		id: 1,
		path: "/public/2021/10/image1.jpg",
		mime_type: "jpeg",
		file_size: "200",
		user_id: 1,
	},
	{
		id: 2,
		path: "/public/2021/10/image2.jpg",
		mime_type: "jpeg",
		file_size: "200",
		user_id: 2,
	},
	{
		id: 3,
		path: "/public/2021/10/image3.png",
		mime_type: "png",
		file_size: "200",
		user_id: 3,
	},
	{
		id: 4,
		path: "/public/2021/10/image4.png",
		mime_type: "png",
		file_size: "200",
		user_id: 4,
	},
	{
		id: 5,
		path: "/public/2021/10/image5.jpg",
		mime_type: "jpeg",
		file_size: "200",
		user_id: 5,
	},
];

const medias_types = [
	{
		id: 1,
		name: "thumnail",
		thumnail: true,
		medium: false,
		large: false,
		original: false,
	},
	{
		id: 2,
		name: "medium",
		thumnail: false,
		medium: true,
		large: false,
		original: false,
	},
	{
		id: 3,
		name: "large",
		thumnail: false,
		medium: false,
		large: true,
		original: false,
	},
	{
		id: 4,
		name: "original",
		thumnail: false,
		medium: false,
		large: false,
		original: true,
	},
];

const medias_metas = [
	{
		id: 1,
		path: "/public/2021/10/image1.jpg",
		mime_type: "jpeg",
		file_size: "200",
		media_id: 1,
		media_type_id: 1,
	},
	{
		id: 2,
		path: "/public/2021/10/image2.jpg",
		mime_type: "jpeg",
		file_size: "200",
		media_id: 2,
		media_type_id: 2,
	},
	{
		id: 3,
		path: "/public/2021/10/image3.png",
		mime_type: "png",
		file_size: "200",
		media_id: 3,
		media_type_id: 3,
	},
	{
		id: 4,
		path: "/public/2021/10/image4.png",
		mime_type: "png",
		file_size: "200",
		media_id: 4,
		media_type_id: 4,
	},
	{
		id: 5,
		path: "/public/2021/10/image5.jpg",
		mime_type: "jpeg",
		file_size: "200",
		media_id: 5,
		media_type_id: 4,
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
	for (let i = 0; i < users.length; i++) {
		const user = users[i];
		await prisma.user.upsert({
			where: {id: user.id},
			update: {},
			create: {
				...user,
				password: await hashPassword(user.password),
			},
		});
	}
	for (let i = 0; i < ad_types.length; i++) {
		const ad_type = ad_types[i];
		await prisma.ad_type.upsert({
			where: {id: ad_type.id},
			update: {},
			create: {
				...ad_type,
			},
		});
	}
	for (let i = 0; i < ads.length; i++) {
		const ad = ads[i];
		await prisma.ads.upsert({
			where: {id: ad.id},
			update: {},
			create: {
				...ad,
			},
		});
	}
	for (let i = 0; i < medias.length; i++) {
		const media = medias[i];
		await prisma.media.upsert({
			where: {id: media.id},
			update: {},
			create: {
				...media,
			},
		});
	}
	for (let i = 0; i < medias_types.length; i++) {
		const media_type = medias_types[i];
		await prisma.media_type.upsert({
			where: {id: media_type.id},
			update: {},
			create: {
				...media_type,
			},
		});
	}
	for (let i = 0; i < medias_metas.length; i++) {
		const media_meta = medias_metas[i];
		await prisma.media_meta.upsert({
			where: {id: media_meta.id},
			update: {},
			create: {
				...media_meta,
			},
		});
	}
	for (let i = 0; i < level_types.length; i++) {
		const level_type = level_types[i];
		await prisma.level_type.upsert({
			where: {id: level_type.id},
			update: {},
			create: {
				...level_type,
			},
		});
	}
	for (let i = 0; i < levels.length; i++) {
		const level = levels[i];
		await prisma.level.upsert({
			where: {id: level.id},
			update: {},
			create: {
				...level,
			},
		});
	}

}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		console.log("disconnect Prisma");
		await prisma.$disconnect();
	});

const hashPassword = async (password) => {
	return await argon2.hash(password, {
		type: argon2.argon2id,
		memoryCost: 15360,
		timeCost: 2,
		parallelism: 1,
	});
};