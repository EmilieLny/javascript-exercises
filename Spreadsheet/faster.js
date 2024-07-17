class Spreadsheet {
    constructor(columns) {
        this.columns = columns;
        this.data = new Map(); // To store non-zero values efficiently
    }

    set(row, column, value) {
        if (!this.columns.includes(column)) {
            throw new Error(`Column "${column}" does not exist.`);
        }
        if (!this.data.has(row)) {
            this.data.set(row, {});
        }
        this.data.get(row)[column] = value;
    }

    get(row, column) {
        if (!this.columns.includes(column)) {
            throw new Error(`Column "${column}" does not exist.`);
        }
        return (this.data.has(row) && this.data.get(row)[column] !== undefined) ? this.data.get(row)[column] : 0;
    }

    printFirstN(n) {
        const result = [];
        for (let i = 0; i < n; i++) {
            let rowValues = this.columns.map(column => this.get(i, column));
            result.push(rowValues);
        }
        console.log(result);
    }
}

// Example usage:
const sheet = new Spreadsheet(["fips", "pop", "area"]);
sheet.set(0, "fips", 1001);
sheet.set(0, "pop", 200000);
sheet.set(0, "area", 5000);
sheet.set(5, "fips", 1002);

sheet.printFirstN(6);
