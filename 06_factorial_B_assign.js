function factorialOfNum(n){
    if (n==0) {
        return 1;
    }
    if (n<0 || n==""||n==null||n==undefined) {
        return "plz insert correct data";
        
    }  
    else{
    var fact=1;
for (let index = 1; index <=n; index++) {  
fact=fact*index;
}
return fact;   
}
}
var result=factorialOfNum(5);
console.log(`Factorial of "5" is:${result}`);
var result1=factorialOfNum(3);
console.log(`Factorial of "3" is:${result1}`);
var result2=factorialOfNum(null);
console.log(`Factorial of "null" is:${result2}`);
var result3=factorialOfNum(8);
console.log(`Factorial of "8" is:${result3}`);
var result4=factorialOfNum(undefined);
console.log(`Factorial of "Undifine" is:${result4}`);
var result5=factorialOfNum(9);
console.log(`Factorial of "9" is:${result5}`);
var result6=factorialOfNum(0);
console.log(`Factorial of" 0" is:${result6}`);







