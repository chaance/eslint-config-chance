import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import { rules as rulesJsxA11y } from "./lib/rules-jsx-a11y.js";
import { rules as rulesReact } from "./lib/rules-react.js";
import settings from "./lib/settings-react.js";

/** @type {Record<string, import('eslint').ESLint.Plugin>} */
export const plugins = {
	react: react,
	"react-hooks": reactHooks,
	"jsx-a11y": jsxA11y,
};

export { settings };

/** @type {Partial<import('eslint').Linter.RulesRecord>} */
export const rules = { ...rulesReact, ...rulesJsxA11y };

/** @type {import('eslint').Linter.Config} */
export const config = {
	plugins,
	settings,
	rules,
};
