const request = require("supertest");
const prisma = require("../../prisma/indexPrisma");

describe("Post Image", () => {

	const testMedia = {
		data: {
			path: `public/2021/10`,
			mime_type: "jpeg",
			file_size: "290",
			user: {
				connect: {
					id: 1,
				},
			},
		}
	};

	it("should post the image", async () => {
		const success = prisma.media.create({testMedia});
		expect(success).toBe(true);
	});
});
