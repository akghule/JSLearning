




function showAge(age) {
    console.log("my age:",age);
    
}
showAge(25);

// // function with argument and return type
// function fullName() {
//     var name="akshay ghule";
//     return name;  
// }
// // function with argument and return type
// var fNmae = fullName();
// console.log(fNmae);

// function sumOfNumber(num1,num2,num3) {
//     var sum=num1+num2+num3;
//     return sum;
// }
// var sum1=sumOfNumber(20,30,50);
// console.log(sum1);



function swapVariables(value1, value2) {
    console.log("Before Swap: ", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap: ", value1, value2);
    return "Swapping variables successfully completed";
  }
  var swapResult = swapVariables(10, 20); // Function call or Function invoke
  console.log(swapResult);
  
  var swapResult2 =  swapVariables("akshay", "ghule");
  console.log(swapResult2);


