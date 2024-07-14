// ["fips", "pop", "area"]
// [  1.      2.     3.  ]

class Spreadsheet {
    constructor(columns) {
        this.columnsOrdered = columns;
        this.grid = {};
        columns.forEach(col => {
            this.grid[col] = new Array().fill(null);
        })
    }

    _isColumnValid(column) {
        const isValid = this.grid?.[column] !== undefined;
        if (!isValid) { console.error('Unknown column') }
        return isValid;
    }

    set(row, column, value) {
        if (!this._isColumnValid(column)) {
            return;
        }
        if (this.grid[column].length < row + 1) {
            this.grid[column] = [...this.grid[column], ...new Array(5).fill(null)]
        }
        this.grid[column][row] = value;
        return;
    }

    get(row, column) {
        if (!this._isColumnValid(column)) return null;
        return this.grid[column]?.[row] || 0;
    }

    printFirstN(n) {
        let res = [];
        for (let row = 0; row <= n - 1; row++) {
            let rowToPrint = []
            this.columnsOrdered.forEach(column => {
                rowToPrint.push(this.grid[column]?.[row] || 0)
            })
            res.push(rowToPrint)
        }
        console.log(res)
    }
}

let my_spreadsheet = new Spreadsheet(["fips", "pop", "area"]);
my_spreadsheet.set(0, "fips", 1001);
my_spreadsheet.set(0, "pop", 200000);
my_spreadsheet.set(0, "area", 5000);
my_spreadsheet.set(5, "fips", 1002);
console.log(my_spreadsheet.get(0, "fips"));
console.log(my_spreadsheet.get(0, "area"));
console.log(my_spreadsheet.get(1, "fips"));
console.log(my_spreadsheet.get(1, "area"));
console.log(my_spreadsheet.get(5, "fips"));
console.log(my_spreadsheet.get(5, "area"));
my_spreadsheet.printFirstN(10);