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
