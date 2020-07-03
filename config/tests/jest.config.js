module.exports = {
  automock: false,
  browser: false,
  bail: false,
  collectCoverageFrom: ['backend/**/*.{js}', 'frontend/**/*.{ts, tsx}', '!**/node_modules/**', '!**/vendor/**'],
  coverageDirectory: '<rootDir>/coverage',
  globals: {
    __DEV__: true,
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
  verbose: true,
  setupTestFrameworkScriptFile: './rtl.setup.js',
};
