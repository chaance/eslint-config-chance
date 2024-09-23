# `@chance/eslint`

Rules for my own shit.

## Installation

```sh
# pnpm
pnpm add @chance/eslint eslint@9 --save-dev
# npm
npm i @chance/eslint eslint@9 --save-dev
```

## Usage

Extend `chance` and any optional rulesets in your `eslint.config.js`:

```js
// eslint.config.js
// (eslint.config.mjs if project is not using ESM)
import * as js from "@chance/eslint";
import * as react from "@chance/eslint/react";
import * as typescript from "@chance/eslint/typescript";
import * as vitest from "@chance/eslint/vitest";

export default [
	js.config,
	// Optional rulesets
	typescript.config,
	react.config,
	vitest.config,
];
```
