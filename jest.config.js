const {
    defaults: tsjPreset
} = require('ts-jest/presets');

module.exports = {
    ...tsjPreset,
    preset: 'react-native',
    globals: {
        'ts-jest': {
            babelConfig: true,
        },
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
        '^~/(.*)$': '<rootDir>/$1',
        '\\.svg': '<rootDir>/__mocks__/svgMock.js',
    },
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    transformIgnorePatterns: [
        'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation|@react-native-vector-icons|react-navigation-shared-element)',
    ],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '\\.snap$'],
    cacheDirectory: '.jest/cache',
    testEnvironment: 'jsdom',
    setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
};