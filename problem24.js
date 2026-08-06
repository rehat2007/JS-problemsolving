// Question : Freeze vs Seal
// Create an object and experiment with:
// - Adding properties
// - Updating properties
// - Deleting properties
//   Compare the behavior of:
// - `Object.freeze()`
// - `Object.seal()`
//   Write down your observations.

//   Answer :
const objectExprement = (input) =>{
//   Object.freeze(input)
//   Object.seal(input)
  input.emain = 'rehat@gmail.com'
  input.name = 'Rehat Islam'
  delete input.age
  return input
}

const myDetails = {
    name : 'Rehat' ,
    age : 19,
    country : 'bangladesh' 
}

const result = objectExprement(myDetails)
console.log(result);

// Observations:
// Object.seal() prevents adding new properties and deleting existing properties.
// With Object.seal(), existing property values can still be updated.
// Object.freeze() prevents adding, updating, and deleting properties.
// A frozen object becomes effectively read-only.
