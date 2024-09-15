import * as tsselintParser from "@typescript-eslint/parser";
import tseslintPlugin from "@typescript-eslint/eslint-plugin";
import { ecmaVersion } from "./lib/constants.js";
import rules from "./lib/rules-typescript.js";

/** @type {import('eslint').Linter.LanguageOptions} */
export const languageOptions = {
	sourceType: "module",
	ecmaVersion,
	parser: tsselintParser,
	parserOptions: {
		warnOnUnsupportedTypeScriptVersion: true,
		ecmaVersion,
	},
};

/** @type {Record<string, import('eslint').ESLint.Plugin>} */
export const plugins = {
	"@typescript-eslint": tseslintPlugin,
};

export { rules };

/** @type {string[]} */
export const files = ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"];

/** @type {import('eslint').Linter.Config} */
export const config = {
	files,
	languageOptions,
	plugins,
	rules,
};
