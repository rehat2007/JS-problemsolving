// Question : (FizzBuzz)

// If number is divisible by 3 print FIZZ
// If number is divisible by 5 print BUZZ
// If number is divisible by both print FIZZBUZZ

//Answer :
function fizzbuzz(input) {
    if (typeof input === 'string' || input === null || input < 1) {
        return 'Invalid Input'
    }
    if (typeof input === 'number') {
        for (let i = 0; i <= input; i++) {
            if (i % 3 === 0 && i % 5 === 0) {console.log('FIZZBUZZ');}
            if (i % 3 === 0) {console.log('FIZZ');}
            if (i % 5 === 0) {console.log('BUZZ');}
            else{console.log(i);
            }
        }
        
    }
}

fizzbuzz(20)

