// Question : Count Vowels in a String

// Answer :
function vowelCounter(input) {
    let newInput = input.toLowerCase();
    let vowel = 'aeiou'
    let count = 0;
    for (let i = 0; i < newInput.length; i++) {
        if (vowel.includes(newInput[i])) {
            count++
        }
    }
    return count;
}

let result = vowelCounter("Rehat Islam Addit");
console.log(result);
