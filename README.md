# `eslint-config-chance`

Rules for my own shit.

## Installation

```sh
pnpm add eslint-config-chance eslint@^8.14.0 --save-dev
```

## Usage

Extend `chance` and any optional rulesets in `.eslintrc`:

```json
{
	"extends": ["chance", "chance/react"]
}
```

## Optional rulesets

- `jest`
- `jest-testing-library`
- `react`
- `typescript`
