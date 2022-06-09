export default  {
  "preset": "jest-preset-angular",
  "setupFilesAfterEnv": [
    "<rootDir>/src/jest-config/setup.ts"
  ],
  "transformIgnorePatterns": [
    "node_modules/(?!@storybook/*)"
  ],
  "testPathIgnorePatterns": [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/storybook-static/",
    "<rootDir>/src/test.ts"
  ],
  "coveragePathIgnorePatterns": [
    "/jest-config/",
    "/node_modules/"
  ],
  "snapshotSerializers": [
    "jest-preset-angular/build/serializers/ng-snapshot",
    "jest-preset-angular/build/serializers/html-comment"
  ],
  "globals": {
    "ts-jest": {
      "tsconfig": "<rootDir>/tsconfig.spec.json",
      "stringifyContentPathRegex": "\\.html$",
      "diagnostics": false,
      "isolatedModules": true,
      "astTransformers": {
        "before": [
        ]
      }
    }
  },
  "moduleNameMapper": {
    "\\.(css|less)$": "<rootDir>/src/jest-config/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/jest-config/__mocks__fileMock.js"
  },
  "transform": {
    "^.+\\.(ts|html)$": "ts-jest",
    "^.+\\.js$": "babel-jest"
  },
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "mjs",
    "jsx",
    "json",
    "node",
    ".html"
  ],
  "extensionsToTreatAsEsm": [".ts"]
}