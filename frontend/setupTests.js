// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom'
import server from './src/mocks/server'

beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }))
afterEach(() => server.resetHandlers)
afterAll(() => server.close)
