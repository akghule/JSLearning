function stringHandOn()
{
    var String="   Hey you are doing good,keep it up   ";
    console.log("************ step 1 ***************");
    console.log(String,"the length of string is:",String.length);
    console.log("************ step 2 ***************");
   var String1=String.trim();
   console.log(String,"the length of string1 is:",String1.length);
   console.log("************ step 3 ***************");
   console.log("Extra spaces count by after trim:",String.length-String1.length);
   console.log("************ step 4 ***************");
   console.log("First letter:",String1.charAt(0));
   console.log("************ step 5 ***************");
   console.log("last letter:",String1.charAt(String1.length-1));
   console.log("************ step 6 ***************");
   console.log(String1.split(" "));
   console.log("************ step 7 ***************");
   console.log(String.indexOf("good"));
   console.log("************ step 8 ***************");
   console.log(String.slice(22,33));
   console.log("************ step 9 ***************");
   console.log(String.includes("up"));
   console.log("************ step 10 ***************");
   console.log(String1.startsWith("Hey"));



}
stringHandOn();