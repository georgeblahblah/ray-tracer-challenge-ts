import { describe, expect, test } from "vitest";
import { Tuple } from "./tuple";

describe("tuple", () => {
	test("adding two tuples", () => {
		expect(
			new Tuple(3, -2, 5, 1)
				.add(new Tuple(-2, 3, 1, 0))
				.equals(new Tuple(1, 1, 6, 1)),
		);
	});

	test("negating a tuple", () => {
		const a = new Tuple(1, -2, 3, -4);
		expect(a.negate().equals(new Tuple(-1, 2, -3, 4))).toBe(true);
	});

	test("multiplying a tuple by a scalar", () => {
		const a = new Tuple(1, -2, 3, -4);
		expect(a.multiplyBy(3.5).equals(new Tuple(3.5, -7, 10.5, -14))).toBe(true);
	});

	test("multiplying a tuple by a fraction", () => {
		const a = new Tuple(1, -2, 3, -4);
		expect(a.multiplyBy(0.5).equals(new Tuple(0.5, -1, 1.5, -2))).toBe(true);
	});

	test("dividing a tuple by a scalar", () => {
		const a = new Tuple(1, -2, 3, -4);
		expect(a.divideBy(2).equals(new Tuple(0.5, -1, 1.5, -2))).toBe(true);
	});
});
