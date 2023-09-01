import { expect, it } from "@jest/globals";

// ERROR no-undef - disabled jest globals in v3.0.0
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
