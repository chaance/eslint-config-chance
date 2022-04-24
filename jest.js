const rulesJest = require("./lib/rules-jest");

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
			},
		},
	],
};
