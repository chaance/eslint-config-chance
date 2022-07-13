# `eslint-config-chance`

Rules for my own shit.

## Installation

```sh
pnpm add eslint-config-chance eslint@8 eslint-plugin-import@2 eslint-import-resolver-node@0.3.6 --save-dev

# typescript rules
pnpm add @typescript-eslint/eslint-plugin@5 @typescript-eslint/parser@5 eslint-import-resolver-typescript@3 --save-dev

# react rules
pnpm add eslint-plugin-react@7 eslint-plugin-react-hooks@4 eslint-plugin-jsx-a11y@6 --save-dev

# jest rules
pnpm add eslint-plugin-jest@26 eslint-plugin-jest-dom@4 eslint-plugin-testing-library@5 --save-dev
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
