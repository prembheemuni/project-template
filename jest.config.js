const commonOptions = {
    testPathIgnorePatterns: [],
    coveragePathIgnorePatterns: [],
    testEnvironment: 'jest-environment-jsdom',
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
   
    collectCoverageFrom: ['<rootDir>/src/**/*.ts', '<rootDir>/src/**/*.tsx'],
  };

  export default commonOptions