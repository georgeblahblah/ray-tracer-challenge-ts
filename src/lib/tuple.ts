class Tuple {
	_values: number[];

	constructor(...values: number[]) {
		this._values = values.slice();
	}

	/**
	 * Get the value at `index`
	 * @param index the index of the value to access
	 * @returns the value at `index`
	 * @throws if `index` is out of bounds
	 */
	get(index: number): number {
		if (index > this._values.length) {
			throw new Error(`Index ${index} out of bounds`);
		}
		return this._values[index];
	}

	get length() {
		return this._values.length;
	}

	equals(b: Tuple): boolean {
		const floatEqual = (a: number, b: number): boolean => {
			return Math.abs(a - b) < Number.EPSILON;
		};
		return (
			this.length === b.length &&
			this._values.reduce(
				(acc, curr, index) => acc && floatEqual(curr, b.get(index)),
				true,
			)
		);
	}

	add(b: Tuple): Tuple {
		if (this.length !== b.length) {
			throw new Error("Cannot add two tuples of different lengths");
		}
		this._values = this._values.map((value, index) => value + b.get(index));
		return this;
	}

	subtract(b: Tuple): Tuple {
		if (this.length !== b.length) {
			throw new Error("Cannot subtract two tuples of different lengths");
		}
		this._values = this._values.map((value, index) => value - b.get(index));
		return this;
	}

	negate(): Tuple {
		this._values = this._values.map((value) => -value);
		return this;
	}

	multiplyBy(by: number): Tuple {
		this._values = this._values.map((value) => value * by);
		return this;
	}

	divideBy(value: number): Tuple {
		this.multiplyBy(1 / value);
		return this;
	}
}

export { Tuple };
