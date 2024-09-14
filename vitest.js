import rulesVitest from "./lib/rules-vitest.js";
import rulesJestDom from "./lib/rules-jest-dom.js";
import rulesTestingLibrary from "./lib/rules-testing-library.js";

export default {
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
