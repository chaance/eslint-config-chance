module.exports = {
	overrides: [
		{
			files: ["react.js?(x)"],
			extends: ["../react.js"],
		},
		{
			files: ["react.tsx"],
			extends: ["../react.js", "../typescript.js"],
		},
		{
			files: ["typescript.ts"],
			extends: ["../typescript.js"],
		},
	],
};
