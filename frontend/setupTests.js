// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom'
import server from './src/__mocks__/server'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers)
afterAll(() => server.close)
