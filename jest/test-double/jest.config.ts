import type { Config } from '@jest/types';

const coreDir = '<rootDir>/src';
const coreTestDir = '<rootDir>/test';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [`${coreDir}/**/*.ts`],
  testMatch: [`${coreTestDir}/*.ts`],
};

export default config;
