import { test, expect, describe } from "vitest";
import { isPoint, isVector, makePoint, makeVector, Tuple } from "./position";

describe("tuples", () => {
	test("a tuple with w=1.0 is a point", () => {
		const a = new Tuple(4.3, -4.2, 3.1, Tuple.Point);
		expect(a.x).toEqual(4.3);
		expect(a.y).toEqual(-4.2);
		expect(a.z).toEqual(3.1);
		expect(a.w).toEqual(1.0);

		expect(isPoint(a)).toBe(true);
		expect(isVector(a)).toBe(false);
	});

	test("a tuple with w=0.0 is a vector", () => {
		const a = new Tuple(4.3, -4.2, 3.1, Tuple.Vector);
		expect(a.x).toEqual(4.3);
		expect(a.y).toEqual(-4.2);
		expect(a.z).toEqual(3.1);
		expect(a.w).toEqual(0.0);

		expect(isPoint(a)).toBe(false);
		expect(isVector(a)).toBe(true);
	});

	test("makePoint() creates tuples with w = 1", () => {
		expect(makePoint(4, -4, 3).equals(new Tuple(4, -4, 3, 1))).toBe(true);
	});

	test("makeVector() creates vectors with w = 0", () => {
		expect(makeVector(4, -4, 3).equals(new Tuple(4, -4, 3, 0))).toBe(true);
	});
});
