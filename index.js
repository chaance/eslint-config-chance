/**
 * @see https://github.com/eslint/eslint/issues/3458
 * @see https://www.npmjs.com/package/@rushstack/eslint-patch
 */
// @ts-ignore
require("@rushstack/eslint-patch/modern-module-resolution");

const rulesCore = require("./lib/rules-core");
const settingsCore = require("./lib/settings-core");

module.exports = {
	root: true,
	parser: "@babel/eslint-parser",
	plugins: ["import"],
	env: {
		browser: true,
		es6: true,
		node: true,
		commonjs: true,
	},
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: "module",
		requireConfigFile: false,
	},
	settings: {
		...settingsCore,
	},
	rules: {
		...rulesCore,
	},
};
