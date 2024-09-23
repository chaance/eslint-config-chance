import type { ESLint, Linter } from "eslint";
export const languageOptions: Linter.LanguageOptions;
export const plugins: Record<string, ESLint.Plugin>;
export const rules: Partial<Linter.RulesRecord>;
export const files: string[];
export const config: Linter.Config;
