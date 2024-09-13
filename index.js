const { ecmaVersion } = require("./constants");
const rulesCore = require("./lib/rules-core");

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
	rules: {
		...rulesCore,
	},
};
