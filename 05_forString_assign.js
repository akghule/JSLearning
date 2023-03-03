console.log(`================== Step 1 ===============`);
var Sum=function(str)
{
var count=0;
const Vowel=['a','e','i','o','u','A','I','U','E','O'];
for (let index = 0; index < str.length; index++) {
    if (Vowel.includes(str[index])) {
        count++;
        
    }
    
}
// console.log(count);
return count;
}
var result=Sum(" Javascript is the language Of Internet ");
var result1=Sum(" I an Angular Developer ");
var result2=Sum(" Hard work  and commitment is the key of success ");

console.log( ` Total Number Of Vowels In "Javascript is the language Of Internet": ${result}`);
console.log( ` Total Number Of Vowels In "I an Angular Developer": ${result1}`);
console.log( ` Total Number Of Vowels In "Hard work  and commitment is the key of success": ${result2}`);


console.log(`================== Step 2 ===============`);
function lastWordCharsCount(str){
   var count=0;
for (let index =str.length-1; index>=0; index--) 
{
    var chrTotal=str.charAt(index)
   if(chrTotal==" "){
   break;
   }
   count=count+1; 
}
return count;

}

var result= lastWordCharsCount("Javascript is the language Of Internet");
var result1=lastWordCharsCount(" I an Angular Developer");
var result2=lastWordCharsCount(" Hard work  and commitment is the key of success");
console.log(`Total characters available in the last word of the string="Javascript is the language Of Internet" is:${result}`);
console.log(`Total characters available in the last word of the string=" I an Angular Developer" is:${result1}`);
console.log(`Total characters available in the last word of the string="Hard work  and commitment is the key of success" is:${result2}`);