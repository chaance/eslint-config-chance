const { ecmaVersion } = require("./constants");
const rulesTypescript = require("./lib/rules-typescript");
const settingsTypescript = require("./lib/settings-typescript");

module.exports = {
	overrides: [
		{
			files: ["**/*.ts?(x)"],
			extends: ["plugin:import/typescript"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				sourceType: "module",
				ecmaVersion,
				ecmaFeatures: {
					jsx: true,
				},
				warnOnUnsupportedTypeScriptVersion: true,
			},
			settings: {
				...settingsTypescript,
			},
			plugins: ["@typescript-eslint"],
			rules: {
				...rulesTypescript,
			},
		},
	],
};
