// Question: Clone an Array
// Given an array of fruits:
// - Create a new array
// - Add new fruits
// - Do not modify the original array

// Answer: 
const createNewArr = ( arr , additionalArr ) => {
    const newArr = []
    for (const elements of arr) {
        newArr.push(elements)
    }
    for(const elements of additionalArr){
       newArr.push(elements)
    }
   return newArr
}

const result = createNewArr(['Apple', 'Banana', 'Pear', 'Peach', 'Plum'] , ['Strawberry','Blueberry','Raspberry'])
console.log(result);
