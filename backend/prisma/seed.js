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


const levels = [
	{
		id: 1,
		name: "espana",
		parent_id: null,
		level_type: 1,
	},
	{
		id: 2,
		name: "andalucia",
		parent_id: 1,
		level_type: 2,
	},
	{
		id: 3,
		name: "aragon",
		parent_id: 1,
		level_type: 2,
	},
	{
		id: 4,
		name: "principado de asturias",
		parent_id: 1,
		level_type: 2,
	},
	{
		id: 5,
		name: "islas baleares",
		parent_id: 1,
		level_type: 2,
	},
	{
		id: 6,
		name: "canarias",
		parent_id: 1,
		level_type: 2,
	},
	{
		id: 7,
		name: "cantabria",
		parent_id: 1,
		level_type: 2,
	},
	{
		id: 8,
		name: "castilla-la mancha",
		parent_id: 1,
		level_type: 2,
	},
	{
		id: 9,
		name: "castilla y leon",
		parent_id: 1,
		level_type: 2,
	},
	{
		id: 10,
		name: "cataluna",
		parent_id: 1,
		level_type: 2,
	},
	{
		id: 11,
		name: "comunidad valenciana",
		parent_id: 1,
		level_type: 2,
	},
	{
		id: 12,
		name: "extremadura",
		parent_id: 1,
		level_type: 2,
	},
	{
		id: 13,
		name: "galicia",
		parent_id: 1,
		level_type: 2,
	},
	{
		id: 14,
		name: "la rioja",
		parent_id: 1,
		level_type: 2,
	},
	{
		id: 15,
		name: "madrid",
		parent_id: 1,
		level_type: 2,
	},
	{
		id: 16,
		name: "navarra",
		parent_id: 1,
		level_type: 2,
	},
	{
		id: 17,
		name: "pais vasco",
		parent_id: 1,
		level_type: 2,
	},
	{
		id: 18,
		name: "murcia",
		parent_id: 1,
		level_type: 2,
	},
	{
		id: 19,
		name: "ceuta",
		parent_id: 1,
		level_type: 2,
	},
	{
		id: 20,
		name: "melilla",
		parent_id: 1,
		level_type: 2,
	},
	{
		id: 21,
		name: "alava",
		parent_id: 17,
		level_type: 3,
	},
	{
		id: 22,
		name: "albacete",
		parent_id: 8,
		level_type: 3,
	},
	{
		id: 23,
		name: "alicante",
		parent_id: 11,
		level_type: 3,
	},
	{
		id: 24,
		name: "almeria",
		parent_id: 2,
		level_type: 3,
	},
	{
		id: 25,
		name: "principado de asturias",
		parent_id: 4,
		level_type: 3,
	},
	{
		id: 26,
		name: "avila",
		parent_id: 9,
		level_type: 3,
	},
	{
		id: 27,
		name: "badajoz",
		parent_id: 12,
		level_type: 3,
	},
	{
		id: 28,
		name: "barcelona",
		parent_id: 10,
		level_type: 3,
	},
	{
		id: 29,
		name: "burgos",
		parent_id: 9,
		level_type: 3,
	},
	{
		id: 30,
		name: "caceres",
		parent_id: 12,
		level_type: 3,
	},
	{
		id: 31,
		name: "cadiz",
		parent_id: 2,
		level_type: 3,
	},
	{
		id: 32,
		name: "cantabria",
		parent_id: 7,
		level_type: 3,
	},
	{
		id: 33,
		name: "castellon",
		parent_id: 11,
		level_type: 3,
	},
	{
		id: 34,
		name: "ciudad real",
		parent_id: 8,
		level_type: 3,
	},
	{
		id: 35,
		name: "cordoba",
		parent_id: 2,
		level_type: 3,
	},
	{
		id: 36,
		name: "la coruna",
		parent_id: 13,
		level_type: 3,
	},
	{
		id: 37,
		name: "cuenca",
		parent_id: 8,
		level_type: 3,
	},
	{
		id: 38,
		name: "gerona",
		parent_id: 10,
		level_type: 3,
	},
	{
		id: 39,
		name: "granada",
		parent_id: 2,
		level_type: 3,
	},
	{
		id: 40,
		name: "guadalajara",
		parent_id: 8,
		level_type: 3,
	},
	{
		id: 41,
		name: "guipuzcoa",
		parent_id: 17,
		level_type: 3,
	},
	{
		id: 42,
		name: "huelva",
		parent_id: 2,
		level_type: 3,
	},
	{
		id: 43,
		name: "huesca",
		parent_id: 3,
		level_type: 3,
	},
	{
		id: 44,
		name: "islas baleares",
		parent_id: 5,
		level_type: 3,
	},
	{
		id: 45,
		name: "jaen",
		parent_id: 2,
		level_type: 3,
	},
	{
		id: 46,
		name: "leon",
		parent_id: 9,
		level_type: 3,
	},
	{
		id: 47,
		name: "lerida",
		parent_id: 10,
		level_type: 3,
	},
	{
		id: 48,
		name: "lugo",
		parent_id: 13,
		level_type: 3,
	},
	{
		id: 49,
		name: "comunidad de madrid",
		parent_id: 15,
		level_type: 3,
	},
	{
		id: 50,
		name: "malaga",
		parent_id: 2,
		level_type: 3,
	},
	{
		id: 51,
		name: "region de murcia",
		parent_id: 18,
		level_type: 3,
	},
	{
		id: 52,
		name: "comunidad foral de navarra",
		parent_id: 16,
		level_type: 3,
	},
	{
		id: 53,
		name: "orense",
		parent_id: 13,
		level_type: 3,
	},
	{
		id: 54,
		name: "palencia",
		parent_id: 9,
		level_type: 3,
	},
	{
		id: 55,
		name: "las palmas",
		parent_id: 6,
		level_type: 3,
	},
	{
		id: 56,
		name: "pontevedra",
		parent_id: 13,
		level_type: 3,
	},
	{
		id: 57,
		name: "la rioja",
		parent_id: 14,
		level_type: 3,
	},
	{
		id: 58,
		name: "salamanca",
		parent_id: 9,
		level_type: 3,
	},
	{
		id: 59,
		name: "segovia",
		parent_id: 9,
		level_type: 3,
	},
	{
		id: 60,
		name: "sevilla",
		parent_id: 2,
		level_type: 3,
	},
	{
		id: 61,
		name: "soria",
		parent_id: 9,
		level_type: 3,
	},
	{
		id: 62,
		name: "tarragona",
		parent_id: 10,
		level_type: 3,
	},
	{
		id: 63,
		name: "santa cruz de tenerife",
		parent_id: 6,
		level_type: 3,
	},
	{
		id: 64,
		name: "teruel",
		parent_id: 3,
		level_type: 3,
	},
	{
		id: 65,
		name: "toledo",
		parent_id: 8,
		level_type: 3,
	},
	{
		id: 66,
		name: "valencia",
		parent_id: 11,
		level_type: 3,
	},
	{
		id: 67,
		name: "valladolid",
		parent_id: 9,
		level_type: 3,
	},
	{
		id: 68,
		name: "vizcaya",
		parent_id: 17,
		level_type: 3,
	},
	{
		id: 69,
		name: "zamora",
		parent_id: 9,
		level_type: 3,
	},
	{
		id: 70,
		name: "zaragoza",
		parent_id: 3,
		level_type: 3,
	},
	{
		id: 71,
		name: "ceuta",
		parent_id: 19,
		level_type: 3,
	},
	{
		id: 72,
		name: "melilla",
		parent_id: 20,
		level_type: 3,
	},
];



const level_types = [
	{
		id: 1,
		name: "country",
		country: 1,
		state: 0,
		city: 0,
		town: 0,
		district: 0
	},
	{
		id: 2,
		name: "state",
		country: 0,
		state: 1,
		city: 0,
		town: 0,
		district: 0
	},
	{
		id: 3,
		name: "city",
		country: 0,
		state: 0,
		city: 1,
		town: 0,
		district: 0
	},
	{
		id: 4,
		name: "town",
		country: 0,
		state: 0,
		city: 0,
		town: 1,
		district: 0
	},
	{
		id: 5,
		name: "district",
		country: 0,
		state: 0,
		city: 0,
		town: 0,
		district: 1
	}
]




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