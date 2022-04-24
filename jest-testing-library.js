const rulesJest = require("./lib/rules-jest");
const rulesJestDom = require("./lib/rules-jest-dom");
const rulesTestingLibrary = require("./lib/rules-testing-library");

module.exports = {
	plugins: ["jest", "jest-dom", "testing-library"],
	overrides: [
		{
			files: ["**/__tests__/**/*", "**/*.{spec,test}.*"],
			env: {
				"jest/globals": true,
			},
			rules: {
				...rulesJest,
				...rulesJestDom,
				...rulesTestingLibrary,
			},
		},
	],
};
