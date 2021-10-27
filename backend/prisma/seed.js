const argon2 = require("argon2");
const {PrismaClient} = require("@prisma/client");
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

const ads = [
	{
		id: 1,

		user_id: 1,
		title: "ad1",
		description: "ad house 1",
		city: "Barcelona",
		n_rooms: 2,
		price: 900,
		square_meters: 80,
		n_bathrooms: 1,
		map_lat: 41.385063,
		map_lon: 2.173404,
	},
	{
		id: 2,

		user_id: 1,
		title: "ad2",
		description: "ad house 2",
		city: "Berlin",
		n_rooms: 3,
		price: 1200,
		square_meters: 90,
		n_bathrooms: 2,
		map_lat: 52.520008,
		map_lon: 13.404954,
	},
	{
		id: 3,

		user_id: 1,
		title: "ad3",
		description: "ad house 3",
		city: "Glasgow",
		n_rooms: 2,
		price: 700,
		square_meters: 75,
		n_bathrooms: 1,
		map_lat: 55.864239,
		map_lon: -4.251806,
	},
	{
		id: 4,

		user_id: 1,
		title: "ad4",
		description: "ad house 4",
		city: "Rotterdam",
		n_rooms: 3,
		price: 1000,
		square_meters: 90,
		n_bathrooms: 2,
		map_lat: 51.924419,
		map_lon: 4.477733,
	},
	{
		id: 5,

		user_id: 1,
		title: "ad5",
		description: "ad house 5",
		city: "Mallorca",
		n_rooms: 2,
		price: 700,
		square_meters: 70,
		n_bathrooms: 1,
		map_lat: 39.695263,
		map_lon: 3.017571,
	},
	{
		id: 6,

		user_id: 1,
		title: "ad6",
		description: "ad house 6",
		city: "Lyon",
		n_rooms: 4,
		price: 900,
		square_meters: 85,
		n_bathrooms: 2,
		map_lat: 45.75667,
		map_lon: 4.831811,
	},
	{
		id: 7,

		user_id: 1,
		title: "ad7",
		description: "ad house 7",
		city: "Braga",
		n_rooms: 2,
		price: 800,
		square_meters: 70,
		n_bathrooms: 1,
		map_lat: 41.55013,
		map_lon: -8.427734,
	},
	{
		id: 8,

		user_id: 1,
		title: "ad8",
		description: "ad house 8",
		city: "Napoli",
		n_rooms: 3,
		price: 900,
		square_meters: 65,
		n_bathrooms: 1,
		map_lat: 40.83607,
		map_lon: 14.249339,
	},
	{
		id: 9,

		user_id: 1,
		title: "ad9",
		description: "ad house 9",
		city: "Paris",
		n_rooms: 2,
		price: 1200,
		square_meters: 80,
		n_bathrooms: 2,
		map_lat: 48.834668,
		map_lon: 2.350532,
	},
	{
		id: 10,

		user_id: 1,
		title: "ad10",
		description: "ad house 10",
		city: "London",
		n_rooms: 2,
		price: 1000,
		square_meters: 75,
		n_bathrooms: 1,
		map_lat: 51.499927,
		map_lon: -0.118429,
	},
];

const medias = [
	{
		id: 1,
		path: "../../public/2021/10",
		mime_type: "jpeg",
		file_size: "200",
		user_id: 1,
	},
	{
		id: 2,
		path: "../../public/2021/10",
		mime_type: "jpeg",
		file_size: "200",
		user_id: 2,
	},
	{
		id: 3,
		path: "../../public/2021/10",
		mime_type: "png",
		file_size: "200",
		user_id: 3,
	},
];

const medias_types = [
	{
		id: 1,
		name: "media1",
		thumnail: true,
		medium: false,
		large: false,
		original: false,
	},
	{
		id: 2,
		name: "media2",
		thumnail: false,
		medium: true,
		large: false,
		original: false,
	},
	{
		id: 3,
		name: "media3",
		thumnail: false,
		medium: false,
		large: true,
		original: false,
	},
];

const medias_metas = [
	{
		id: 1,
		path: "../../public/2021/10",
		mime_type: "jpeg",
		file_size: "200",
		media_id: 1,
		media_type_id: 1,
	},
	{
		id: 2,
		path: "../../public/2021/10",
		mime_type: "jpeg",
		file_size: "200",
		media_id: 2,
		media_type_id: 2,
	},
	{
		id: 3,
		path: "../../public/2021/10",
		mime_type: "png",
		file_size: "200",
		media_id: 3,
		media_type_id: 3,
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