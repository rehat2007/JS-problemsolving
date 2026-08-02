// Question : Reverse a String

//Answer:
function revarseString(input) {
  let convertedInput = input.split('')
  let i = convertedInput.length - 1
  let newArr = [];
  for (i; i >= 0; i--) {
    newArr.push(convertedInput[i])
  }
  return newArr.join('')
}

let result = revarseString("Rehat Islam Addit")
console.log(result);
