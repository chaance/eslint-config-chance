# `eslint-config-chance`

Rules for my own shit.

## Installation

```sh
# pnpm
pnpm add eslint-config-chance@latest eslint@9 --save-dev
# npm
npm i eslint-config-chance@latest eslint@9 --save-dev
```

## Usage

Extend `chance` and any optional rulesets in `.eslintrc`:

```js
// eslint.config.js
// (eslint.config.mjs if project is not using ESM)
import * as js from "eslint-config-chance";
import * as react from "eslint-config-chance/react";
import * as typescript from "../typescript.js";
import * as vitest from "../vitest.js";

export default [
	js.config,
	// Optional rulesets
	typescript.config,
	react.config,
	vitest.config,
];
```
