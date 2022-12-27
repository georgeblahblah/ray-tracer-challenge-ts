import { describe, expect, test } from "vitest";
import { Colour } from "./colour";

describe("colours", () => {
	test("colours are red, green, blue tuples", () => {
		const c = new Colour(-0.5, 0.4, 1.7);
		expect(c.red).toBe(-0.5);
		expect(c.green).toBe(0.4);
		expect(c.blue).toBe(1.7);
	});
});
