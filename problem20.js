// Question: Number Analyzer
// Create a function that returns:
// - Largest Number
// - Smallest Number
// - Total Numbers
// - Average

// Answer :

const numberAnalyzer = (arr) => {
    
    const largestNumbern = Math.max(...arr)
    const smallesrnumber = Math.min(...arr)
    let sum = 0
    
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        sum = sum + element
    }

    const average = (sum / arr.length).toFixed(2);
    return `\n Largest Number :${largestNumbern}
           \n Smallest Number :${smallesrnumber}
           \n Total :${arr.length}
           \n Average :${average}`
}

const result = numberAnalyzer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
console.log(result);
