// Test case 1: Empty write
const file1 = {
    write: (data) => {
        console.log('Writing to file:', data);
    },
};
const bufferSize1 = 5;
const bufferedFile1 = new BufferedFile(file1, bufferSize1);
bufferedFile1.write([]);
bufferedFile1.flush();
// Expected output: (no output)

// Test case 2: Multiple small writes
const file2 = {
    write: (data) => {
        console.log('Writing to file:', data);
    },
};
const bufferSize2 = 5;
const bufferedFile2 = new BufferedFile(file2, bufferSize2);
bufferedFile2.write([1, 2]);
bufferedFile2.write([3]);
bufferedFile2.write([4, 5]);
bufferedFile2.flush();
// Expected output: Writing to file: [1, 2, 3, 4, 5]

// Test case 3: Write larger than buffer size
const file3 = {
    write: (data) => {
        console.log('Writing to file:', data);
    },
};
const bufferSize3 = 3;
const bufferedFile3 = new BufferedFile(file3, bufferSize3);
bufferedFile3.write([1, 2, 3, 4, 5, 6, 7, 8, 9]);
bufferedFile3.flush();
// Expected output:
// Writing to file: [1, 2, 3]
// Writing to file: [4, 5, 6]
// Writing to file: [7, 8, 9]

// Test case 4: Multiple writes larger than buffer size
const file4 = {
    write: (data) => {
        console.log("Writing to file:", data);
    },
};
const bufferSize4 = 4;
const bufferedFile4 = new BufferedFile(file4, bufferSize4);
bufferedFile4.write([1, 2, 3, 4, 5]);
bufferedFile4.write([6, 7, 8, 9, 10]);
bufferedFile4.flush();
// Expected output:
// Writing to file: [1, 2, 3, 4]
// Writing to file: [5, 6, 7, 8]
// Writing to file: [9, 10]