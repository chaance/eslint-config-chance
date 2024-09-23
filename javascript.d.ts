import type { Linter } from "eslint";
export const rules: Partial<Linter.RulesRecord>;
export const files: string[];
export const languageOptions: Linter.LanguageOptions;
export const config: Linter.Config;
