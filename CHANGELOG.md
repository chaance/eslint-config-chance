# Changelog

## v3.0.0

- Updated all dependencies to latest
- Disabled check for `react/react-in-jsx-scope` as most frameworks utilize automatic JSX transform
- Downgraded all Jest checks to warnings
- **BREAKING:** Disable Jest globals by default. I'm mostly using Vitest these days and generally avoid including globals. To turn back on:
  ```
  {
  	"extends": ["chance", "chance/jest"],
  	"env": {
  		"jest/globals": true
  	}
  }
  ```

## v4.0.0

- Disabled `no-var` check. I never write it anyway unless I absolutely mean to.
- Disabled `react/require-render-return` check since React 18 allows `undefined` returns in components
- Downgraded most rules in `chance/testing-library` to warnings
- **BREAKING:** Updated peer dependency for `eslint-plugin-testing-library` to v6
- **BREAKING:** Updated `parserOptions.ecmaVersion` to `2022`
- **BREAKING:** Removed `chance/jest` and `chance/jest-testing-library` rulesets in favor of `chance/vitest`

## v4.0.1

- Expand peer dependency for TypeScript eslint plugins to allow for v7
