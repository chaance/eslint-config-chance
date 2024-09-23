import type { ESLint, Linter } from "eslint";
export const settings: Record<string, unknown>;
export const plugins: Record<string, ESLint.Plugin>;
export const rules: Partial<Linter.RulesRecord>;
export const config: Linter.Config;
