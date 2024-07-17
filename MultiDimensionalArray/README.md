# Multi-Dimensional Array

This project implements a multi-dimensional array class in JavaScript.

## Features

- Initializes a multi-dimensional array with default values of 0
- Supports strict sizing of the array
- Can handle X-dimensional arrays (where X is the number of dimensions specified)

## Usage

### Constructor

const arr = new MultiDimensionalArray([3, 3, 3]); // Creates a 3x3x3 array

### Setting Values

arr.set([0, 1, 2], 5); // Sets the value 5 at position [0, 1, 2]

### Getting Values

const value = arr.get([0, 1, 2]); // Retrieves the value at position [0, 1, 2]

### Examples

// Create a 2x3 array
const arr2D = new MultiDimensionalArray([2, 3]);

// Set some values
arr2D.set([0, 0], 1);
arr2D.set([0, 1], 2);
arr2D.set([1, 2], 6);

// Get values
console.log(arr2D.get([0, 0])); // Output: 1
console.log(arr2D.get([1, 2])); // Output: 6

// Create a 3x3x3 array
const arr3D = new MultiDimensionalArray([3, 3, 3]);

// Set a value
arr3D.set([1, 1, 1], 27);

// Get the value
console.log(arr3D.get([1, 1, 1])); // Output: 27
