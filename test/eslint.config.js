import * as base from "../javascript.js";
import * as react from "../react.js";
import * as typescript from "../typescript.js";
import * as vitest from "../vitest.js";

export const config = [
	base.config,
	typescript.config,
	{
		...react.config,
		files: ["react.{js,jsx,tsx}"],
	},
	{
		...vitest.config,
		files: ["vitest.test.{js,ts}"],
	},
];

export default config;
