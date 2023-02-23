console.log(`=====================step 1====================`);

function maleMarriageEligbility(gender,age,boyName) {
    var result = gender== "male" && age>=21 ? `Hey ${boyName} you are eligible for marriage` : `"${boyName} you are not eligible for marriage "`;
    return result;
}
var result = maleMarriageEligbility("male",25,"billgates");
console.log(`${result}`);
console.log(`${maleMarriageEligbility("male",17,"stew jobs")}`);


console.log(`=====================step 2====================`);
 function femaleMarriageEligibility(gender,age,girName) {
    var femaleresult = gender =="female" && age>=18 ? `hey ${girName} you are eligible for marriage` : `"${girName} you are not eligible for marriage"`;
    return femaleresult;

 }
 var femaleresult = femaleMarriageEligibility("female",16,"jenifer");
 console.log(`${femaleresult}`);
 console.log(`${femaleMarriageEligibility("female",27,"malinda gates")}`);