describe('logging()', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  describe('when debug package is not available', () => {
    beforeAll(() => {
      jest.doMock('debug', () => {
        throw new Error('import error')
      })
    })

    describe('when useConsole is true', () => {
      test('returns console.debug()', () => {
        const logging = require('../src/logging').default
        expect(logging('logger', true)).toBe(console.debug)
      })
    })

    describe('when useConsole is false', () => {
      test('returns an empty function', () => {
        let logging: (logger: string, useConsole?: boolean) => void
        logging = require('../src/logging').default
        expect(logging('logger', false)).not.toBe(console.debug)

        logging = require('../src/logging').default
        expect(logging('logger')).not.toBe(console.debug)
      })
    })
  })

  describe('when debug package is available', () => {
    const debug = () => undefined

    beforeAll(() => {
      jest.doMock('debug', () => {
        return jest.fn(() => debug)
      })
    })

    test("returns require('debug')('loggerName')", () => {
      const logging = require('../src/logging').default
      expect(logging('logger')).toBe(debug)
    })
  })
})
