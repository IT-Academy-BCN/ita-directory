/*
const request = require("supertest");

describe("Post Image", () => {
 	it("should post the image", async () => {
 		const res = await request(app.server).post("/media/v1/upload");

 		expect(res.statusCode).toEqual(200);
 		expect(res.body).toStrictEqual([]);
 	});
});
*/

import request from "supertest";
import {describe, test, expect} from "vitest";
import app from "../app"

describe("POST /v1/login", ()=>{
	describe("given a username and correct password", ()=>{
		test("should respond with a 200 status code", async()=>{
			const response = await request(app).post("/v1/login").send({
				"email": "test@test.test",
  				"password": "Test-test"
			});
			expect(response.statusCode).toBe(200);
		});
		 test("should specify json in the content type header", async()=>{
		 	const response = await request(app).post("/v1/login").send({
		 		"email": "test@test.test",
  		 		"password": "Test-test"
		});
		expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
		});
	});
	describe("given a username and a wrong password", ()=>{

	});
	describe("given a user that doesn't exist", ()=>{

	});
	describe("given empty fields", ()=>{

	});
});


describe("test control, eliminar luego", ()=>{
	test("prova", ()=>{
		expect(1+1).toBe(2);
	});
});