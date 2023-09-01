// @ts-expect-error
import { expect, it } from "@jest/globals";

// Type error, no-undef disabled in TS
describe("hello", () => {
	// WARN jest/valid-title
	it("", () => {
		expect(false).toBe(true);
	});

	it("warns for invalid expect in promises", async () => {
		new Promise(() => true).then((value) => {
			// WARN jest/valid-expect-in-promise
			expect(value).toBe(true);
		});
	});
});
