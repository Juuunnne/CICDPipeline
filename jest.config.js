export default {
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest'
  },
  extensionsToTreatAsEsm: ['.js'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  testEnvironment: 'node'
};
