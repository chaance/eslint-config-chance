/**
 * @see https://github.com/eslint/eslint/issues/3458
 * @see https://www.npmjs.com/package/@rushstack/eslint-patch
 */
// @ts-ignore
require("@rushstack/eslint-patch/modern-module-resolution");

const { ecmaVersion } = require("./constants");
const rulesCore = require("./lib/rules-core");
const settingsCore = require("./lib/settings-core");

module.exports = {
	env: {
		browser: true,
		node: true,
		[`es${ecmaVersion}`]: true,
	},
	parserOptions: {
		ecmaVersion,
		sourceType: "module",
	},
	plugins: ["import"],
	settings: {
		...settingsCore,
	},
	rules: {
		...rulesCore,
	},
};
