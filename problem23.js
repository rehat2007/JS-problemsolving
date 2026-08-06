//  Question : Object Explorer
//  Print:
// - All Keys
// - All Values
// - All Entries

// Answer :
const objExplorer = (input) => {
let keys = ''
let value = ''
let ent = '' 

for( const [key , val] of Object.entries(input)){
  keys = keys + ' ' + `${key}`
  value = value + ' ' + `${val}`
  ent += `${key} : ${val} \n`
   
}
return `Keys :${ keys} \nValues : ${value} \nEntries :\n${ent}`
}

const obj = {
  name: "iPhone 15",
  brand: "Apple",
  price: 999,
  category: "Smartphone"
}

const result = objExplorer(obj)
console.log(result);
