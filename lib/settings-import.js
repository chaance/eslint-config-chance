module.exports = {
	"import/ignore": ["node_modules", "\\.(css|md|svg|json)$"],
	"import/resolver": {
		[require.resolve("eslint-import-resolver-node")]: {
			extensions: [".js", ".jsx"],
		},
	},
};
