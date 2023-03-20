console.log("=========== Step 1 ============");
let arrow = () => {
  console.log("Good Morning, Today is Monday");
};
arrow();
console.log("===========Step 2============");
let arrow2 = (num1, num2, num3 = 1) => {
  const result = num1 * num2 * num3;
  
  console.log("The Multiplcation is:",result);
};
arrow2(5, 5, 2);
arrow2(10, 4);

console.log("========== Step 3===========");

let arrow3 = (arg1, arg2, arg3, arg4, arg5) => {
  return arg1 + arg2 + arg3 + arg4 + arg5;
};
let result = arrow3(100, 100, 200, 349, 756);
console.log(`The Addition of The 5 Argument : ${result}`);
let result2 = arrow3("I am", " learning", " ES6", " Features", " in depth");
console.log(`The SUM of Value is: ${result2}`);