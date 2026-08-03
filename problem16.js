// Question : Student Introduction
// Create a function that accepts:
// - Name
// - Age
// - Country
// Print a nicely formatted introduction using template literals.

//Answer : 
const personId = (name , age , country) =>{
return `Hello I am ${name}.I Truned ${age} this Yesr and I am from ${country} `
}

let result = personId( 'Rehat', 19, 'Bangladesh');
console.log(result);
