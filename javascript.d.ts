import type { Linter } from "eslint";
export const rules: Partial<Linter.RulesRecord>;
export const files: string[];
/** @deprecated */
export const languageOptions: Linter.LanguageOptions;
/** @deprecated */
export const config: Linter.Config;

export function getLanguageOptions(
	globals?: Linter.Globals,
): Linter.LanguageOptions;

export function getConfig(globals?: Linter.Globals): Linter.Config;
