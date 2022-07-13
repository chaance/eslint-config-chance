const { ecmaVersion } = require("./constants");
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
