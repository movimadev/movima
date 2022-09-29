module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '\\.(js|jsx|ts|tsx)$': '@sucrase/jest-plugin',
  },
  testMatch: ['**/?(*.)+(spec|test).ts?(x)', '**/__tests__/**/*.ts?(x)'],
  setupFilesAfterEnv: ['./configuration/jest/jsdom.mocks.js'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '@movima/(.*)': '<rootDir>/src/movima-$1/src',
  },
};
