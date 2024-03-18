import { expect, it, describe as vitestDescribe } from "vitest";

// Type error, (no-undef should be disabled in TS, so no eslint error)
describe("hello", () => {
	// WARN jest/valid-title
	it("", () => {
		expect(false).toBe(true);
	});
});

// WARN vitest/valid-describe-callback
vitestDescribe("poop");
