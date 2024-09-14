import { ecmaVersion } from "./constants.js";
import rulesCore from "./lib/rules-core.js";

export default {
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
