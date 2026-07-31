// Question : Factorial of a Number 

//Answer :
function calculateFactorial(input) {
    if (typeof input === 'string' || input === null ) {
        return 'Invalid Input'
    }
    if (typeof input === 'number' || input > 0) {
        let fact = 1
        for (let i = 1; i <= input; i++) {
            fact *= i 
        }
        return `Factorial is : ${fact}`
    }
    return 'Invalid Input'
}

let result = calculateFactorial(5)

console.log(result);
