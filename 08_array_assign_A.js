let arraySeasonalFruits =["Banana","Orange","Apple","Mango","Water Melon"];
console.log(arraySeasonalFruits);
// var lengthOfArray=arraySeasonalFruits.length
// console.log(lengthOfArray);

console.log(`============= step 1 =============`);

const valueAtIndex0 = arraySeasonalFruits[0];
console.log(`Value at index 0 is: ${valueAtIndex0}`);
const valueAtIndexLast = arraySeasonalFruits[4];
console.log(`Value at index last is: ${valueAtIndexLast}`);


console.log(`============= step 2 =============`);
console.log(`2.  Add element "Papaya" before the element "Banana"`);
let addPapaya=arraySeasonalFruits.unshift("Papaya")
console.log(arraySeasonalFruits);

console.log(`============= step 3 =============`);
console.log(`3.  Remove mango from the array"`);
arraySeasonalFruits.splice(4,1);
console.log(arraySeasonalFruits);

console.log(`============= step 4 =============`);
console.log(`4.  Add element "Pineapple" at the last position`);
arraySeasonalFruits.push("Pineapple")
console.log(arraySeasonalFruits);

console.log(`============= step 5 =============`);
console.log(`5.  Add element "Dragon Fruit" before "Water melon"`);
arraySeasonalFruits.splice(5,0,"Dragon Fruit")
console.log(arraySeasonalFruits);

console.log(`============= step 6 =============`);
console.log(`6.  Replace element "Orange " with "Kivi"`);
arraySeasonalFruits.splice(2,1,"Kivi")
console.log(arraySeasonalFruits);

console.log(`============= step 7 =============`);
console.log(`7.  log the element starting from index 1 to 4`);
const subarray=arraySeasonalFruits.slice(1,5)
console.log(subarray);

console.log(`============= step 8 =============`);
console.log(`8.  log the element last 3 element`);
const subarray1=arraySeasonalFruits.slice(4,arraySeasonalFruits.length)
console.log(subarray1);
