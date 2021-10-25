const request = require("supertest");
const fs = require("fs");
//const prisma = require("../../prisma/indexPrisma");
const app = require("../app");

describe("Post Image", () => {

	it('should upload image', async () => {
		const res = await request(app.server)
			.post('media/v1/upload')
			.set('content-type', 'multipart/form-data')
			.field('userId', 1)
			.attach('image', fs.readFileSync(`public/2021/8/jam.jpg`))
		expect(res.status).toEqual(200);
	});
});
