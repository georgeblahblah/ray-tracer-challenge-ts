import { Colour } from "./colour.js";

class Canvas {
	/**
	 * the grid of pixels is represented as a 2d array (matrix)
	 * the matrix is row major. see https://pr0g.github.io/mathematics/matrix/2022/12/26/column-row-major.html
	 */
	#pixels: Colour[][];

	constructor(rowCount: number, columnCount: number) {
		if (rowCount <= 0 || columnCount <= 0) {
			throw new Error("both rows and columns must be > 0");
		}
		const defaultFillColour = new Colour(0, 0, 0);
		const rows = new Array(rowCount);
		const columns: Colour[] = new Array(columnCount);
		columns.fill(defaultFillColour);

		this.#pixels = rows.fill(columns);
	}

	get columns() {
		return this.#pixels[0].length;
	}

	get rows() {
		return this.#pixels.length;
	}

	getPixel(row: number, column: number): Colour {
		return this.#pixels[row][column];
	}
}

export { Canvas };
