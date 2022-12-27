import { Tuple } from "./tuple";

class Position extends Tuple {
	static Point: 1.0 = 1.0;
	static Vector: 0.0 = 0.0;

	constructor(x: number, y: number, z: number, w: number) {
		super(x, y, z, w);
	}

	get x() {
		return this.get(0);
	}

	get y() {
		return this.get(1);
	}

	get z() {
		return this.get(2);
	}

	get w() {
		return this.get(3);
	}

	add(b: Position): Position {
		super.add(b);
		return this;
	}

	subtract(b: Position): Position {
		super.subtract(b);
		return this;
	}

	negate(): Position {
		super.negate();
		return this;
	}

	multiplyBy(by: number): Position {
		super.multiplyBy(by);
		return this;
	}

	divideBy(value: number): Position {
		super.divideBy(value);
		return this;
	}

	get magnitude(): number {
		return Math.sqrt(
			this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w,
		);
	}

	normalize(): Position {
		const magnitude = this.magnitude;
		return new Position(
			this.x / magnitude,
			this.y / magnitude,
			this.z / magnitude,
			this.w / magnitude,
		);
	}

	dot(b: Position): number {
		return this.x * b.x + this.y * b.y + this.z * b.z + this.w * b.w;
	}
}

const makePoint = (x: number, y: number, z: number) =>
	new Position(x, y, z, Position.Point);
const makeVector = (x: number, y: number, z: number) =>
	new Position(x, y, z, Position.Vector);
const isPoint = (a: Position): boolean => a.w === Position.Point;
const isVector = (a: Position): boolean => a.w === Position.Vector;

const cross = (a: Position, b: Position): Position =>
	makeVector(
		a.y * b.z - a.z * b.y,
		a.z * b.x - a.x * b.z,
		a.x * b.y - a.y * b.x,
	);

export { Position, isPoint, isVector, makePoint, makeVector, cross };
