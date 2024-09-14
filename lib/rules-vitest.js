import { WARN } from "../constants.js";

export default {
	"vitest/no-conditional-expect": WARN,
	"vitest/no-disabled-tests": WARN,
	"vitest/no-duplicate-hooks": WARN,
	"vitest/no-focused-tests": WARN,
	"vitest/no-identical-title": WARN,
	"vitest/no-interpolation-in-snapshots": WARN,
	"vitest/no-mocks-import": WARN,
	"vitest/valid-describe-callback": WARN,
	"vitest/valid-expect": WARN,
	"vitest/valid-title": [
		WARN,
		{
			mustNotMatch: ["^\\s+$"],
		},
	],
};
