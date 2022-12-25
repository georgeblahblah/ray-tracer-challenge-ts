import { test, expect, describe } from "vitest";
import {
	cross,
	isPoint,
	isVector,
	makePoint,
	makeVector,
	Tuple,
} from "./position";

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

	test("adding two tuples", () => {
		expect(
			new Tuple(3, -2, 5, 1)
				.add(new Tuple(-2, 3, 1, 0))
				.equals(new Tuple(1, 1, 6, 1)),
		);
	});

	test("subtracting two points", () => {
		const p1 = makePoint(3, 2, 1);
		const p2 = makePoint(5, 6, 7);
		expect(p1.subtract(p2).equals(makeVector(-2, -4, -6))).toBe(true);
	});

	test("subtracting a vector from a point", () => {
		const p = makePoint(3, 2, 1);
		const v = makeVector(5, 6, 7);
		expect(p.subtract(v).equals(makePoint(-2, -4, -6))).toBe(true);
	});

	test("subtracting two vectors", () => {
		const v1 = makeVector(3, 2, 1);
		const v2 = makeVector(5, 6, 7);
		expect(v1.subtract(v2).equals(makeVector(-2, -4, -6))).toBe(true);
	});

	test("subtracting a vector from the zero vector", () => {
		const zero = makeVector(0, 0, 0);
		const v = makeVector(1, -2, 3);
		expect(zero.subtract(v).equals(makeVector(-1, 2, -3))).toBe(true);
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

	test("computing magnitude of vectors", () => {
		expect(makeVector(1, 0, 0).magnitude).toBe(1);
		expect(makeVector(0, 1, 0).magnitude).toBe(1);
		expect(makeVector(0, 0, 1).magnitude).toBe(1);
		expect(makeVector(1, 2, 3).magnitude).toBe(Math.sqrt(14));
		expect(makeVector(-1, -2, -3).magnitude).toBe(Math.sqrt(14));
	});

	test("normalizing vectors", () => {
		const v1 = makeVector(4, 0, 0);
		expect(v1.normalize().equals(makeVector(1, 0, 0))).toBe(true);

		const v2 = makeVector(1, 2, 3);
		expect(
			v2
				.normalize()
				.equals(
					makeVector(1 / Math.sqrt(14), 2 / Math.sqrt(14), 3 / Math.sqrt(14)),
				),
		);
	});

	test("magnitude of a normalized vector", () => {
		const v = makeVector(1, 2, 3);
		expect(v.normalize().magnitude).toBe(1);
	});

	test("dot product of two tuples", () => {
		const a = makeVector(1, 2, 3);
		const b = makeVector(2, 3, 4);
		expect(a.dot(b)).toBe(20);
	});

	test("the cross product of two vectors", () => {
		const a = makeVector(1, 2, 3);
		const b = makeVector(2, 3, 4);
		expect(cross(a, b).equals(makeVector(-1, 2, -1)));
		expect(cross(b, a).equals(makeVector(1, -2, 1)));
	});
});
