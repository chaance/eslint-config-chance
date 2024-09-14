import { ERROR, OFF, WARN } from "../constants.js";

export default {
	"no-dupe-class-members": OFF,
	"no-duplicate-imports": OFF,
	"no-undef": OFF,

	// Add TypeScript specific rules (and turn off ESLint equivalents)
	"@typescript-eslint/consistent-type-assertions": WARN,
	"@typescript-eslint/consistent-type-imports": WARN,

	"no-array-constructor": OFF,
	"@typescript-eslint/no-array-constructor": WARN,

	"no-redeclare": OFF,
	"@typescript-eslint/no-redeclare": ERROR,
	"no-use-before-define": OFF,
	"@typescript-eslint/no-use-before-define": [
		WARN,
		{
			functions: false,
			classes: false,
			variables: false,
			typedefs: false,
		},
	],
	"no-unused-expressions": OFF,
	"@typescript-eslint/no-unused-expressions": [
		WARN,
		{
			allowShortCircuit: true,
			allowTernary: true,
			allowTaggedTemplates: true,
		},
	],
	"no-unused-vars": OFF,
	"@typescript-eslint/no-unused-vars": [
		WARN,
		{
			args: "none",
			ignoreRestSiblings: true,
		},
	],
	"no-useless-constructor": OFF,
	"@typescript-eslint/no-useless-constructor": WARN,

	// Let TS handle these
	"react/jsx-no-undef": OFF,
	"react/style-prop-object": OFF,
};
