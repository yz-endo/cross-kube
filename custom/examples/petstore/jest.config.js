module.exports = {
  transform: {
    '.(ts|js)': 'ts-jest'
  },
  testEnvironment: 'node',
  testRegex: '/test/.*\\.test\\.ts$',
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'js'],
  verbose: true,
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig-jest.json'
    }
  }
}
