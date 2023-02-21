var greet = "Good morning";
console.log(typeof greet);
console.log("Total number of char available in string:");
console.log(greet.length);
var greetLength=greet.length;
console.log(greetLength);
console.log("Find the char by index value");
var charAt3=greet.charAt(3);
console.log(charAt3);

console.log("find the last char");

var chatAtLast=greet.charAt(greetLength-1);
console.log(chatAtLast);

console.log("Index of char which is not available into the string: ", greet.indexOf('z'));
console.log("Index of 0 char",greet.indexOf('o'));
console.log("Index of 0 char",greet.lastIndexOf('o'));

var replaceResult=greet.replace('Good morning' ,' Good Evening');
console.log(replaceResult);

console.log("Upper Case:", replaceResult.toUpperCase());
console.log("Upper Case:", replaceResult.toLowerCase());

var myName = "   Mohit   Sharma  ";
var myNameAfterTrim = myName.trim();
console.log("Removing extra start and end spaces using trim(): ",myNameAfterTrim, myName.length, myNameAfterTrim.length);

console.log("find the total extra spaces removed from myName");
console.log(myName.length-myNameAfterTrim.length);
console.log(myName.trimStart(),myName.trimEnd());

console.log("includes()");
console.log("Is substring Mor includes in the greet or not: ", greet.includes("mor"));
console.log("Is substring Afternoon includes in the greet or not: ", greet.includes("Afternoon"));
console.log("Is substring o includes in the greet or not: ", greet.includes("o"));

console.log("slice() method");
var sliceResult = greet.slice(5, 12);
console.log(sliceResult);
console.log(greet.slice(2, 5));

console.log("split() method");
var greet = "Good Morning";
var splitResult = greet.split(" ");
console.log(splitResult);


console.log("split() method");
var greet = "Good Morning my dear friend";
var splitResult = greet.split(" ");
console.log(splitResult);
console.log("Total words: ", splitResult.length);


var myFriendList = "Billgates, Stew Job, Elon Musk, Ratan Tata, Sundar Pichai, Satya Nadella, Narayan Murti, Nandan Nilekani, Larry Page, Surgey Brain, Tim Cook";

var splitResult1 = myFriendList.split(",");

console.log(splitResult1);
console.log("Total words: ", splitResult1.length);

