console.log("1.no arguments and no return type:"); 
var num1=10;
var num2=20;
function multi() {
    multiplication=num1 * num2;
    console.log(multiplication);
    
}
multi();

function div(){
    division=num2/num1;
    console.log(division);
}
div();

console.log("2.arguments and no return type:"); 
function personalDetails(firstName,lastName,collegeName) {
    console.log("firstName:",firstName,"lastName:",lastName,"collegeName:",collegeName);
    
}personalDetails("akshay","ghule","Amrutvahini college of Engineering,Sangamner");

console.log("3.swap");
function swapValueDude(name1,name2) {
    console.log("before swap:",name1,name2);
    var temp=name1;
    name1=name2;
    name2=temp;
    console.log("after swap:",name1,name2);
    
}
swapValueDude("virat","anushka")
swapValueDude('1000','2000')

console.log("4. adding");
function addThreeValues(v1,v2,v3) {
    sum=v1+v2+v3;
   
    return sum;
    
}
var add1=addThreeValues(10.23,600,40);
console.log("addition is:",add1);
var add2=addThreeValues("hello","good","morning")
console.log("addition is:",add2);
