// Question: Number Analyzer
// Create a function that returns:
// - Largest Number
// - Smallest Number
// - Total Numbers
// - Average

// Answer :

const numberAnalyzer = (arr) => {
    return largestNumber(arr)
    // smallestNumber(arr)
    // totalNumbers(arr)
    // Average(arr)
}

const result = numberAnalyzer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
console.log(result);

const largestNumber = (arr) => {
    let largestnum = 0
    arr.forEach(element => {
        if(element > largestnum){
          largestnum = element
        }
    })
    return largestnum
}