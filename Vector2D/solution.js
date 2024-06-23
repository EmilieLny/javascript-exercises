"use strict";
class Vector2D {
    constructor(vec) {
        this.vec = vec;

        this.maxY = this.vec.length;
        this.pointerY = -1;

        this.pointerX = -1;
    }

    _getMaxX() {
        return this.vec[this.pointerY > -1 ? this.pointerY : 0]?.length - 1;
    }

    next() {
        if (!this.hasNext()) return false;

        // next node is in the same Y axe
        const maxX = this._getMaxX();
        if (this.pointerX + 1 <= maxX) {
            this.pointerY = this.pointerY === -1 ? 0 : this.pointerY;
            this.pointerX++;
            return this.vec[this.pointerY][this.pointerX];
        }

        // next node is in the next Y axe
        this.pointerY++;
        while (!this.vec[this.pointerY].length) {
            if (this.pointerY > this.maxY) return false;
            this.pointerY++;
        }
        this.pointerX = 0;
        return this.vec[this.pointerY][this.pointerX];
    }

    hasNext() {
        let maxX = this._getMaxX();

        while (maxX === -1) {
            if (this.pointerY > this.maxY) return false;
            this.pointerY++;
            maxX = this._getMaxX();
        }

        if (this.pointerX + 1 <= maxX) return true;
        let y = this.pointerY + 1;
        while (y) {
            if (y > this.maxY) return false;
            if (this.vec[y]?.length) return true;
            y++;
        }
    }
}
// const vector2D = new Vector2D([[1, 2], [3], [4]]);
// const vector2D = new Vector2D([[1, 2], [], [], [4]]);
// const vector2D = new Vector2D([[], [1, 2], [], [], [4]]);
const vector2D = new Vector2D([[], [1, 2], [], [], [4]], []);

console.log("--- RES:", vector2D.next()); // 1 // 1
console.log("--- RES:", vector2D.next()); // 2 // 2
console.log("--- RES:", vector2D.next()); // 3 // 4
console.log("--- RES:", vector2D.hasNext()); // true // false
// console.log("--- RES:", vector2D.hasNext()); // true
// console.log("--- RES:", vector2D.next()); // 4
// console.log("--- RES:", vector2D.hasNext()); // false
