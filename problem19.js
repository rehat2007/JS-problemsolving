// Question:Count Even Numbers
// Given an array of numbers:
// Count how many even numbers exist.

// Answer :
const countEven = (arr) => {
    let count = 0;
    arr.forEach(element => {
        if (element % 2 === 0) {
            count += 1;
        }
    })
    return count
}

const result = countEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
console.log(result);
