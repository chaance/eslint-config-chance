import { expect, it, describe as vitestDescribe } from "vitest";

// ERROR no-undef
describe("hello", () => {
	// WARN jest/valid-title
	it("", () => {
		expect(false).toBe(true);
	});
});

// WARN vitest/valid-describe-callback
vitestDescribe("poop");
