# Changelog

## v1.1.0

- Deprecate `config` and `languageOptions` in base config in favor of
  `getConfig` and `getLanguageOptions`. This allows you to pass specific globals
  depending on your environment.
- Add `globals` entrypoint, which re-exports the default export from the
  `globals` package.

## v1.0.0

Initial release under the name `@chance/eslint`
