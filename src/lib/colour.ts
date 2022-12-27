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

	add(b: Colour): Colour {
		super.add(b);
		return this;
	}

	subtract(b: Colour): Colour {
		super.subtract(b);
		return this;
	}

	multiplyBy(by: number): Colour {
		super.multiplyBy(by);
		return this;
	}

	multiplyByColour(colour: Colour): Colour {
		this._values = this._values.map(
			(value, index) => value * colour.get(index),
		);
		return this;
	}
}

export { Colour };
