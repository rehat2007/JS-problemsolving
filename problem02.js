// Question : Sum of a Range of Numbers (1 to N)?

// Answer :
function sum(input) {
    if ( typeof input === "number" && input !== null && input > 0) {
        let sum = 0;
        for (let i = 1; i <= input; i++) {
            sum += i
        }
        return `Result is : ${sum}`
    }
    else{
        return 'Invalid Input'
    }
}

let result = sum(100)

console.log(result);
