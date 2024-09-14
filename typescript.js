import { ecmaVersion } from "./constants.js";
import rulesTypescript from "./lib/rules-typescript.js";
import settingsTypescript from "./lib/settings-typescript.js";

export default {
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
