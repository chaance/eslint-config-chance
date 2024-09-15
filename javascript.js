import globals from "globals";
import { ecmaVersion } from "./lib/constants.js";
import rules from "./lib/rules-core.js";

export { rules };

/** @type {string[]} */
export const files = [
	"**/*.js",
	"**/*.jsx",
	"**/*.mjs",
	"**/*.cjs",
	"**/*.ts",
	"**/*.tsx",
	"**/*.mts",
	"**/*.cts",
];

/** @type {import('eslint').Linter.LanguageOptions} */
export const languageOptions = {
	sourceType: "module",
	ecmaVersion,
	globals: globals.browser,
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
};

/** @type {import('eslint').Linter.Config} */
export const config = {
	files,
	languageOptions,
	rules,
};
