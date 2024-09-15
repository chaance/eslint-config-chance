import { fixupPluginRules } from "@eslint/compat";
import testingLibrary from "eslint-plugin-testing-library";
import vitest from "@vitest/eslint-plugin";
import rulesVitest from "./lib/rules-vitest.js";
import rulesTestingLibrary from "./lib/rules-testing-library.js";

/** @type {Record<string, import('eslint').ESLint.Plugin>} */
export const plugins = {
	vitest,
	"testing-library": fixupPluginRules(testingLibrary),
};

/** @type {Partial<import('eslint').Linter.RulesRecord>} */
export const rules = { ...rulesVitest, ...rulesTestingLibrary };

/** @type {string[]} */
export const files = ["**/__tests__/**/*", "**/*.{spec,test}.*"];

/** @type {import('eslint').Linter.Config} */
export const config = {
	files,
	plugins,
	rules,
};
