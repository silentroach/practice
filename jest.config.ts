import type { InitialOptionsTsJest } from "ts-jest";

const config: InitialOptionsTsJest = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  coverageProvider: "v8",
};

module.exports = config;
