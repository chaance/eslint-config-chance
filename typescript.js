/**
 * @see https://github.com/eslint/eslint/issues/3458
 * @see https://www.npmjs.com/package/@rushstack/eslint-patch
 */
// @ts-ignore
require("@rushstack/eslint-patch/modern-module-resolution");

const rulesTypescript = require("./lib/rules-typescript");

module.exports = {
	overrides: [
		{
			files: ["**/*.ts?(x)"],
			extends: ["plugin:import/typescript"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				warnOnUnsupportedTypeScriptVersion: true,
			},
			plugins: ["@typescript-eslint"],
			rules: {
				...rulesTypescript,
			},
		},
	],
};
