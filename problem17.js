// Question : Smart Calculator
// Create a calculator function that supports:
// - Addition
// - Subtraction
// - Multiplication
// - Division
//   If the second number is missing, use a default value.

//   Answer :
const calculator = ( a, b = 0, calculate) => {
    if (calculate === '+') {
        return `Result : ${a + b}`
    }
    if (calculate === '-') {
        return `Result : ${a - b}`
    }
    if (calculate === '*') {
        return `Result : ${a * b}`
    }
    if (calculate === '/') {
        return `Result : ${a / b}`
    }
    else {
        return 'Invalid Input'
    }
}

let addition = calculator( 5, 5 , '+')
let subtraction = calculator( 20, 10, '-')
let multiplication = calculator( 5, 2, '*')
let division = calculator( 20, 2, '/')

console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);

