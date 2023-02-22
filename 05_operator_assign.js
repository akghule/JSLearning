console.log(`=====================step 1====================`);
function squareOfWorldLength(value)
{
//  console.log(value,value.length,value.length**2);
 console.log(`${value} length of argument: ${value.length} Squar of Argument length: ${value.length**2}`);
}
squareOfWorldLength("JavaScript");
squareOfWorldLength("Google Chrome");
squareOfWorldLength("Developer Smart");


console.log(`=====================step 2====================`);
  function OperatorAssign()
  {
    var String1="I Am Angular Developer";
    var Totallength=String1.length;
    console.log("Total length of string:",Totallength);
    var TotalWords=String1.split(" ")
    console.log("Total number of Word length:",TotalWords.length);
    console.log(`1.String length divide by total number of word available in string`);
    var Result=Totallength/TotalWords.length;
    console.log(Result);
    console.log(`2.String length multiple by total number of word available in string`);
    var Result1=Totallength*TotalWords.length;
    console.log(Result1);
   
  } 
  OperatorAssign();