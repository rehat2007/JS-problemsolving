// Question : Check if a Number is Even or Odd

// Answer :
function oddEvenChacker(input){
   if( typeof input === "number" && input > 0 && input !== null){
      if(input % 2 === 0 ){
        return `${input} is an Even Number.`
      }
      else{
        return `${input} is an Odd Number.`
      }
   }
   else{
    return 'Invalid Input'
   }
}

let result = oddEvenChacker(5)

console.log(result);
