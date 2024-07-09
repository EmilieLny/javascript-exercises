# Spreadsheet

Your task is to create a representation of a spreadsheet:

- a spreadsheet should have a fixed number of columns (specified as string-names at creation)
- a spreadsheet should have infinitely many rows (numbered, starting at 0)
- each cell contains a number, defaulting to 0
- you should be able to:
  - set the value of a cell
  - get the value of a cell
  - print out the first N rows of the spreadsheet (don’t worry too much about making this pretty)

```
+------+--------+--------+--------+
| | "fips" | "pop" | "area" |
+======+========+========+========+
| 0 | 1001 | 200000 | 5000 |
+------+--------+--------+--------+
| 1 | 0 | 0 | 0 |
+------+--------+--------+--------+
| 2 | 0 | 0 | 0 |
+------+--------+--------+--------+
| 3 | 0 | 0 | 0 |
+------+--------+--------+--------+
| 4 | 0 | 0 | 0 |
+------+--------+--------+--------+
| 5 | 1002 | 0 | 0 |
+------+--------+--------+--------+
| ... | ... | ... | ... |

```

## Init code

```
class Spreadsheet {
    constructor(columns) {}

    set(row, column, value) {}

    get(row, column) {}

    printFirstN(n) {}
}
```
