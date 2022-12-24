class Tuple {
	#values: [number, number, number, typeof Tuple.Point | typeof Tuple.Vector];

	static Point: 1.0 = 1.0;
	static Vector: 0.0 = 0.0;

	constructor(
		x: number,
		y: number,
		z: number,
		w: typeof Tuple.Point | typeof Tuple.Vector,
	) {
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

	equals(b: Tuple) {
		return this.x === b.x && this.y === b.y && this.z === b.z && this.w === b.w;
	}
}

const makePoint = (x: number, y: number, z: number) =>
	new Tuple(x, y, z, Tuple.Point);
const makeVector = (x: number, y: number, z: number) =>
	new Tuple(x, y, z, Tuple.Vector);
const isPoint = (a: Tuple): boolean => a.w === Tuple.Point;
const isVector = (a: Tuple): boolean => a.w === Tuple.Vector;

export { Tuple, isPoint, isVector, makePoint, makeVector };
