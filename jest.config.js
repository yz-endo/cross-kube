module.exports = {
  transform: {
    '.ts': 'ts-jest'
  },
  testEnvironment: 'node',
  testRegex: '/test/.*\\.test\\.ts$',
  moduleFileExtensions: ['ts', 'js'],
  testPathIgnorePatterns: ['/node_modules/', '/examples/', '/custom/'],
  coveragePathIgnorePatterns: ['/node_modules/', '/test/', '/examples/', '/custom/'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95
    }
  },
  collectCoverageFrom: ['src/*.ts'],
  verbose: true
}
