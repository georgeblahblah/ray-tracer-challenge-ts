import { describe, expect, test } from "vitest";
import { Canvas } from "./canvas.js";
import { Colour } from "./colour.js";

describe("canvas", () => {
	test("creating a canvas", () => {
		// height = 20, width = 10
		const c = new Canvas(20, 10);
		expect(c.columns).toBe(10);
		expect(c.rows).toBe(20);
		const black = new Colour(0, 0, 0);

		// check all pixels are filled with the default colour
		for (let rowCounter = 0; rowCounter < 20; rowCounter++) {
			for (let columnCounter = 0; columnCounter < 10; columnCounter++) {
				expect(c.getPixel(rowCounter, columnCounter).equals(black)).toBe(true);
			}
		}
	});
});
