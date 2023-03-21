class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

array_employess = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(`==================Step-1-TCS Employees Detail=========================`);

array_employess.forEach((Employee) => {
    
    if(Employee.emp_company == "TCS")
     
     
    { 
     console.log(`Employee name: ${Employee.emp_name}, Company name:${Employee.emp_company}`);
    }


});
// console.log(`----------------------------------------------------------------------------------------------------------------------`);

console.log(`==========Step-2-Whose Salary is Greater Than Equal To 50000 is ================`);

 array_employess.forEach((Employee) => {
    
    if(Employee.emp_salary>=50000)

    { 
    console.log(`ID: ${Employee.emp_id}, Name: ${Employee.emp_name}, Department: ${Employee.emp_dept}, Salary: ${Employee.emp_salary}, Company: ${Employee.emp_company}`);
    
     }

 });
  
// console.log(`----------------------------------------------------------------------------------------------------------------`);



console.log(`=================Step-3-Find the sum of salary of all employees =============`);

let sum = 0;
array_employess.forEach((Employee) => {
    sum = sum + Employee.emp_salary;
    
    
});
console.log(sum);

// console.log(`-----------------------------------------------------------------------------------------------------------------`);



console.log(`================Step-4-Average Salary======================`);
let Average = 0;
Average = 416000 / 7;

console.log(Average);


// console.log(`---------------------------------------------------------------------------------------------------------------`);



console.log(`============Step-5-IT or Hr department Employee whose salary is greater or equal to 75000 ================`);

array_employess.forEach(Employee => {
    if( Employee.emp_dept == "IT" && Employee.emp_salary>= 75000)
    {
        console.log(`Employee id: ${Employee.emp_id}, Employee Dept: ${Employee.emp_dept}, Employee Salary: ${Employee.emp_salary}, Employee name: ${Employee.emp_name}, Company name:${Employee.emp_company}`);
    }
    
});

array_employess.forEach(Employee => {
    if( Employee.emp_dept == "HR" && Employee.emp_salary>= 75000)
    {
        console.log(`Employee id: ${Employee.emp_id}, Employee Dept: ${Employee.emp_dept}, Employee Salary: ${Employee.emp_salary}, Employee name: ${Employee.emp_name}, Company name:${Employee.emp_company}`);
    }
    
});