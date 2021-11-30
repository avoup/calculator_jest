/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  // clearMocks: true,
  // collectCoverage: true,
  // coverageDirectory: "coverage",
  // coverageProvider: "v8",
  // testEnvironment: "/home/lasha/Documents/Projects/sealights-jest-plugin/lib/environment/customEnvironment.ts",
  // reporters: ['/home/lasha/Documents/Projects/sealights-jest-plugin/tsOutputs/'],
  // testResultsProcessor: '/home/lasha/Documents/Projects/calculator_jest/packages/sealights-jest-plugin/resultsProcessor.js',
  testPathIgnorePatterns: [
    "/node_modules/",
    "/tsOutput/"
  ],
  // setupFiles: ['/home/lasha/Documents/Projects/calculator_jest/packages/sealights-jest-plugin/setupFile.ts'],
  // setupFilesAfterEnv: ['/home/lasha/Documents/Projects/sealights-jest-plugin/lib/jest.setup.ts']
  // setupFilesAfterEnv: ['/home/lasha/Documents/Projects/calculator_jest/packages/sealights-jest-plugin/jest.setup.ts']

};
