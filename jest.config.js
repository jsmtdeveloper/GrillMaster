module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: [
    './jest.setup.ts'
  ],
  moduleDirectories: ["node_modules", "src"],
}
