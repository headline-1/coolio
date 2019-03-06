module.exports = {
  cacheDirectory: '.jest/cache',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/node_modules/',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/**/*.d.ts',
  ],
  coverageDirectory: '<rootDir>/reports/coverage',
  coverageReporters: ['json', 'lcov'],
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
  ],
  setupFiles: [
    '<rootDir>/../../spec/spec.setup.ts',
  ],
  testMatch: [
    '<rootDir>/src/**/*.(spec|test).ts',
  ],
  transform: {
    '^.+\\.(js|jsx|json)$': '<rootDir>/../../node_modules/babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
};
