import './loadEnv'
import request from 'supertest'
import { describe, test, expect, beforeAll } from 'vitest'
import app from '../app'

const client = require('../utils/initRedis')

let token = null

describe('POST /login', () => {
  beforeAll(async () => {
    await client.connect()
  })
  describe('given a username and correct password', () => {
    test('should respond with a 200 status code', async () => {
      const response = await request(app).post('/login').send({
        email: 'test@test.test',
        password: 'Test-test99',
      })

      token = response.body.token

      expect(response.statusCode).toBe(200)
      expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
    })
  })
  // describe('given a username and a wrong password', () => {})
  // describe("given a user that doesn't exist", () => {})
  // describe('given empty fields', () => {})
})

describe('GET /users', () => {
  test('test ', async () => {
    const response = await request(app).get('/users').set('Authorization', `Bearer ${token}`)
    expect(response.statusCode).toBe(200)
    expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
  })
})

describe('GET /user', () => {
  test('test ', async () => {
    const response = await request(app).get('/user').set('Authorization', `Bearer ${token}`)
    expect(response.statusCode).toBe(200)
    expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
  })
})

describe('PATCH /users', () => {
  test('Update user ', async () => {
    const response = await request(app)
      .patch('/users')
      .send({
        name: 'NewTest',
        lastnames: 'NewLastNames',
      })
      .set('Authorization', `Bearer ${token}`)
    expect(response.statusCode).toBe(200)
    expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
  })
})
