import { Tuple } from "./tuple";

class Colour extends Tuple {
	constructor(red: number, green: number, blue: number) {
		super(red, green, blue);
	}

	get red() {
		return this.get(0);
	}

	get green() {
		return this.get(1);
	}

	get blue() {
		return this.get(2);
	}
}

export { Colour };
