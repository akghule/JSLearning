console.log(`=====================step 1====================`);


function greaterNumber(num1,num2) {
    var result = num1 > num2 ? num1 : num2;
    return result;
}
 var number =greaterNumber(10,-10);
 console.log(`largest no between 10 and -10 is: ${number}`);
 console.log(`largest no between 800 and 899 is: ${greaterNumber(800,899)}`);
 console.log(`=====================step 2====================`);

 function isEvenOrOddNum(num) {
    var result = num %2 ==0 ? "True" : "False";
    return result;
    
 }
var isnumber = isEvenOrOddNum(29);
console.log(`The 29 number is even:${isnumber}`);
console.log(`The 44 number is even:${isEvenOrOddNum(44)}`);
console.log(`The 0 number is even:${isEvenOrOddNum(0)}`);
console.log(`The 101 number is even:${isEvenOrOddNum(101)}`);
console.log(`=====================step 3====================`);

// function greaterNumber(num1, num2){
//     var result = num1>num2 ? num1 : num2;
//      console.log(`Greater number amongst ${num1}, ${num2} is: ${result} `);
//  }
//  greaterNumber(10, -10);
//  greaterNumber(800, 899);



function wordLength(word) {
    var wordLength = word.length;
    var result = wordLength % 2 == 0 ? "EVEN" : "ODD";
    return result;
  }
  var result = wordLength("JavaScript");
  console.log(`Word "JavaScript" has ${result} length`);
   // var result = wordLength("Google"); 
   console.log(`Word "Developer" has ${wordLength("Developer")} length` );
   console.log(`Word "Google" has ${wordLength("Google")} lenght`);