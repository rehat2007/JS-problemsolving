// Reverse a string/array in-place   

function reverseArr(input) {
  if (Array.isArray(input)) {
    let firstInex = 0
    let lastIndex = input.length - 1
    for (let i = 0; i <= lastIndex; i++) {
      return [input[firstInex], input[lastIndex] = input[input.length - i], input[i]]
    }
  }
  if (typeof value === "string") {
    return input
  }
  else {
    return 'Invalid Input'
  }
}

let result = reverseArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(result);

