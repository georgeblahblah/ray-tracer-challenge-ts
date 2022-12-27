import { describe, expect, test } from "vitest";
import { Colour } from "./colour";

describe("colours", () => {
	test("colours are red, green, blue tuples", () => {
		const c = new Colour(-0.5, 0.4, 1.7);
		expect(c.red).toBe(-0.5);
		expect(c.green).toBe(0.4);
		expect(c.blue).toBe(1.7);
	});

	test("adding colours", () => {
		const c1 = new Colour(0.9, 0.6, 0.75);
		const c2 = new Colour(0.7, 0.1, 0.25);
		expect(c1.add(c2).equals(new Colour(1.6, 0.7, 1.0)));
	});

	test("subtracting colours", () => {
		const c1 = new Colour(0.9, 0.6, 0.75);
		const c2 = new Colour(0.7, 0.1, 0.25);
		expect(c1.subtract(c2).equals(new Colour(0.2, 0.5, 0.5)));
	});

	test("multiplying a colour by a scalar", () => {
		const c = new Colour(0.2, 0.3, 0.4);
		expect(c.multiplyBy(2).equals(new Colour(0.4, 0.6, 0.8)));
	});
});
