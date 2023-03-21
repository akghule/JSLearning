console.log(`===================== Step-1 ==============================`);
console.log(`Array Elements With its Index:`);
const arrayNumbers =[1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

arrayNumbers.forEach(( currentValue,index) => {
    console.log(`index: ${index} , element: ${currentValue}`);
});
console.log(`===================== Step-2 ==============================`);
console.log(`Positive Numbers Are:`);
let array = [];
arrayNumbers.forEach((element) => {
    if(element>=0){
        array.push(element)

    }
    
});
console.log(array);

console.log(`===================== Step-3 ==============================`);
console.log(`Negative Numbers Are:`);
let array1 = [];
arrayNumbers.forEach((element) => {
    if(element < 0){
        array1.push(element)
    }
    
});
console.log(array1);

console.log(`===================== Step-4 ==============================`);
console.log(`Even Numbers using forEach:`);
let array2 = [];
arrayNumbers.forEach((element) => {
    if(element % 2==0){
        array2.push(element)
    }
});console.log(array2);


console.log(`===================== Step-5 ==============================`);
console.log(`Sum of all Elementf From Array:`);

let sum = 0;
arrayNumbers.forEach((element) => {
     sum = sum + element;
    
});
console.log(sum);

console.log(`===================== Step-6 ==============================`);
console.log(`even index array value:`);
let array3 = [];

arrayNumbers.forEach((element, index) => {

    if(index % 2 == 0){
        array3.push(element)
    }
});console.log(array3);