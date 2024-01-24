import type { Config } from 'jest';
import nextJest from 'next/jest';

const createConfig = nextJest({
  dir: './'
});

const config: Config = {
  testMatch: ["**/tests/**/*.test.ts?(x)"],
  testEnvironment: "jsdom"
};

export default createConfig(config);
