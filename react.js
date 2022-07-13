const { ecmaVersion } = require("./constants");

/**
 * @see https://github.com/eslint/eslint/issues/3458
 * @see https://www.npmjs.com/package/@rushstack/eslint-patch
 */
// @ts-ignore
require("@rushstack/eslint-patch/modern-module-resolution");

const rulesJsxA11y = require("./lib/rules-jsx-a11y");
const rulesReact = require("./lib/rules-react");
const settingsReact = require("./lib/settings-react");

module.exports = {
	parserOptions: {
		sourceType: "module",
		ecmaVersion,
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ["react", "react-hooks", "jsx-a11y"],
	settings: {
		...settingsReact,
	},
	rules: {
		...rulesReact,
		...rulesJsxA11y,
	},
};
