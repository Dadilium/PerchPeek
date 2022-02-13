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
        'react-native-code-push': '<rootDir>/__mocks__/react-native-code-push.js',
        '@react-navigation': '<rootDir>/__mocks__/@react-navigation.js',
    },
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    transformIgnorePatterns: [
        'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation|@react-native-vector-icons|react-navigation-shared-element)',
        // '<rootDir>/node_modules/(react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@unimodules/.*|native-base|react-native-code-push)',
    ],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '\\.snap$'],
    cacheDirectory: '.jest/cache',
    testEnvironment: 'jsdom',
    setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
    //   setupFiles: ['<rootDir>/__mocks__/mock-setup.js'],
};