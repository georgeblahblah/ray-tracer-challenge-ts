class Tuple {
	#values: Readonly<[number, number, number, number]>;

	static Point: 1.0 = 1.0;
	static Vector: 0.0 = 0.0;

	constructor(x: number, y: number, z: number, w: number) {
		this.#values = [x, y, z, w];
	}

	get x() {
		return this.#values[0];
	}

	get y() {
		return this.#values[1];
	}

	get z() {
		return this.#values[2];
	}

	get w() {
		return this.#values[3];
	}

	equals(b: Tuple): boolean {
		const floatEqual = (a: number, b: number): boolean => {
			return Math.abs(a - b) < Number.EPSILON;
		};
		return (
			floatEqual(this.x, b.x) &&
			floatEqual(this.y, b.y) &&
			floatEqual(this.z, b.z) &&
			floatEqual(this.w, b.w)
		);
	}

	add(b: Tuple): Tuple {
		return new Tuple(this.x + b.x, this.y + b.y, this.z + b.z, this.w + b.w);
	}

	subtract(b: Tuple): Tuple {
		return new Tuple(this.x - b.x, this.y - b.y, this.z - b.z, this.w - b.w);
	}

	negate(): Tuple {
		return new Tuple(-this.x, -this.y, -this.z, -this.w);
	}

	multiplyBy(value: number): Tuple {
		return new Tuple(
			this.x * value,
			this.y * value,
			this.z * value,
			this.w * value,
		);
	}

	divideBy(value: number): Tuple {
		return this.multiplyBy(1 / value);
	}

	normalize(): Tuple {
		const magnitude = this.magnitude;
		return new Tuple(
			this.x / magnitude,
			this.y / magnitude,
			this.z / magnitude,
			this.w / magnitude,
		);
	}

	dot(b: Tuple): number {
		return this.x * b.x + this.y * b.y + this.z * b.z + this.w * b.w;
	}

	get magnitude(): number {
		return Math.sqrt(
			this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w,
		);
	}
}

const makePoint = (x: number, y: number, z: number) =>
	new Tuple(x, y, z, Tuple.Point);
const makeVector = (x: number, y: number, z: number) =>
	new Tuple(x, y, z, Tuple.Vector);
const isPoint = (a: Tuple): boolean => a.w === Tuple.Point;
const isVector = (a: Tuple): boolean => a.w === Tuple.Vector;

const cross = (a: Tuple, b: Tuple): Tuple =>
	makeVector(
		a.y * b.z - a.z * b.y,
		a.z * b.x - a.x * b.z,
		a.x * b.y - a.y * b.x,
	);

export { Tuple, isPoint, isVector, makePoint, makeVector, cross };
