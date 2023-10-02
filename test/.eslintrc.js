module.exports = {
	overrides: [
		{
			files: ["react.js?(x)"],
			extends: ["../index.js", "../react.js"],
		},
		{
			files: ["react.tsx"],
			extends: ["../index.js", "../react.js", "../typescript.js"],
		},
		{
			files: ["typescript.ts"],
			extends: ["../index.js", "../typescript.js"],
		},
		{
			files: ["vitest.test.js"],
			extends: ["../index.js", "../vitest.js"],
		},
		{
			files: ["vitest.test.ts"],
			extends: ["../index.js", "../typescript.js", "../vitest.js"],
		},
	],
};
