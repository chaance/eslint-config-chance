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
			files: ["jest.test.js"],
			extends: ["../index.js", "../jest.js"],
		},
		{
			files: ["jest.test.ts"],
			extends: ["../index.js", "../typescript.js", "../jest.js"],
		},
	],
};
