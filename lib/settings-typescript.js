export default {
	"import/parsers": {
		[require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
	},
	"import/resolver": {
		[require.resolve("eslint-import-resolver-node")]: {
			extensions: [".js", ".jsx", ".ts", ".tsx"],
		},
		[require.resolve("eslint-import-resolver-typescript")]: {
			alwaysTryTypes: true,
		},
	},
};
