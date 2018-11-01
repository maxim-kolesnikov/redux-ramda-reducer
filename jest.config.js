module.exports = {
  collectCoverage: true,
  moduleFileExtensions: ['js', 'json', 'node'],
  testURL: 'http://localhost',
  modulePaths: ['lib/'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  }
};