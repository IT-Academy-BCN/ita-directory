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

describe('GET /constants', () => {
  test('Get constants', async () => {
    const response = await request(app).get('/constants')
    expect(response.statusCode).toBe(200)
  })
})

describe('GET /ads', () => {
  test('Get all ads', async () => {
    const response = await request(app).get('/ads/1')
    expect(response.statusCode).toBe(200)
    expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
  })
})

describe('GET /ad/1', () => {
  test('Get one ads', async () => {
    const response = await request(app).get('/ads/1')
    expect(response.statusCode).toBe(200)
    expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
  })
})

describe('POST /ads', async () => {
  test('Post one ad', async () => {
    // console.log(token)
    const response = await request(app).post('/ads').set('Authorization', `Bearer ${token}`).send({
      userId: 1,
      title: 'ad5',
      description: 'ad house 2',
      city: 'Berlin',
      nRooms: 3,
      price: 1200,
      squareMeters: 90,
      nBathrooms: 2,
      mapLat: 52.520008,
      mapLon: 13.404954,
      adTypeId: 1,
      adStatusId: 1,
    })
    expect(response.statusCode).toBe(200)
    expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
  })
})
