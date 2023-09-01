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
