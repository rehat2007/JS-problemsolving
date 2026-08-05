// Question : Employee Card
// Display employee information using object destructuring.

// Answer :
const employeeCard = (employee) => {
    const { name, age, position, department, salary, email } = employee;
       return`\nName : ${name} ,
              \nAge : ${age} ,
              \nPosition : ${position} ,
              \nDepartment : ${department} ,
              \nSalary : ${salary} ,
              \nEmail : ${email} `
}

const employee = {
  name: "Rahat Islam",
  age: 19,
  position: "Junior Web Developer",
  department: "IT",
  salary: 35000,
  email: "rahat.islam@example.com"
}

const result = employeeCard(employee)
console.log(result)
