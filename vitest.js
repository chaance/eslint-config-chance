const rulesVitest = require("./lib/rules-vitest");
const rulesJestDom = require("./lib/rules-jest-dom");
const rulesTestingLibrary = require("./lib/rules-testing-library");

module.exports = {
	plugins: ["vitest", "jest-dom", "testing-library"],
	overrides: [
		{
			files: ["**/__tests__/**/*", "**/*.{spec,test}.*"],
			rules: {
				...rulesVitest,
				...rulesJestDom,
				...rulesTestingLibrary,
			},
		},
	],
};
