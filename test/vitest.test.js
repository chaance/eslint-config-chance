import { expect, it } from "vitest";

// ERROR no-undef
describe("hello", () => {
	// WARN jest/valid-title
	it("", () => {
		expect(false).toBe(true);
	});
});

// WARN vitest/valid-describe-callback
describe("poop");
