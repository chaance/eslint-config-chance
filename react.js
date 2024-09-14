import { ecmaVersion } from "./constants.js";
import rulesJsxA11y from "./lib/rules-jsx-a11y.js";
import rulesReact from "./lib/rules-react.js";
import settingsReact from "./lib/settings-react.js";

export default {
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
