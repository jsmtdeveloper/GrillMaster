module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: './src/tsconfig.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        'jest-preset-angular/build/InlineFilesTransformer',
        'jest-preset-angular/build/StripStylesTransformer'
      ]
    }
  },
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest'
  },
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  moduleNameMapper: {
    '^src/(.*)$': './src/$1',
    '@app/(.*)': '<rootDir>/src/app/$1',
    '^assets/(.*)$': './src/assets/$1',
    '^environments/(.*)$': './src/environments/$1'
  },
  transformIgnorePatterns: ['node_modules/(?!@ngrx)'],
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
