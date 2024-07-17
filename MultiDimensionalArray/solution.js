// multi - dimensions array 
// position = depth*row*col ex: 64*64*32 
// constructor(position: number[]) 
// ==> init the default values to 0
// ==> strict size of the 3d array
// ==> expect to be a Xd array
// set(position: number[], value: number);


// { row: { column : { depth: }}}
// [[[0,0,0],[0,0,0],[0,0,0]], [[0,0,0],[0,0,0],[0,0,0]]] array[row][col][depth]

// 2x3
// [0, 1, 2,
//  3, 4, 5]
// grid[1][1] ==> grid[1*3 + 1] ==> grid[i*row.length + j]

// 2x3x4 depth*row*col ==> i*j*k*m*n ==> grid[1][1][1][1][1] => grid(1*(j*k*m*n) + 1*(k*m*n) + 1*(m*n) ... + 1)
// grid[1][1][1] ==> grid[1*(3*4) + 1*4 + 1] ==> grid[i*(j*row.length*col.length) + j*col.length + k]

class MultiDimensionArray {
    constructor(shapes) {
        this.shapes = shapes;
        let arrayLength = 1;
        this.shapes.forEach(shape => arrayLength *= shape)
        this.data = new Array(arrayLength).fill(0);
    }

    set(position, value) {
        let res = 0;
        for (const i = 0; i < position.length; i++) {
            let indexOfPosition = 1;
            for (const j = i; j < this.shapes.length; j++) {
                indexOfPosition *= this.shapes[j]
            }
            indexOfPosition *= position[i];
            res += indexOfPosition;
        }
        this.data[this.shapes[1] * position[0] + position[1]] = value;
    }
}

const newArray = new MultiDimensionArray([2, 3])
newArray.set([1, 1], 4);
console.log(newArray.data)