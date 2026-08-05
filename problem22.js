// Question : Product Information
// Given a product object, generate a readable product description.

// Answer : 
const productInfo = (info) =>{
const {name, brand, price, category} = info
return `${name} is a ${category} from ${brand} and it cost ${price}$ per unit.`
}

const product = {
  name: "iPhone 15",
  brand: "Apple",
  price: 999,
  category: "Smartphone"
}

const result = productInfo(product)
console.log(result);
