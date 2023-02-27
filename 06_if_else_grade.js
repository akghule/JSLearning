console.log(`============== step 2 ====================`);
function gradeCalculation(marks){
    // if marks is 0 or less than 0 or greater than 100 or not in valid number format 
    // ex. “56” or “Seventy” then log the msg→ Please provide the valid marks
    
    if(marks>=90 && marks<=100){
        console.log(`Funtastic marks - ${marks} your grade is A+`);
   
    }
    if(marks>=75 && marks<90){
        console.log(`Excellent marks - ${marks} your grade is A`);
   
    }
    if(marks>=50 && marks<75){
        console.log(`good marks - ${marks} your grade is B`);
   
    }
    if(marks>=35 && marks<50){
        console.log(`marks is - ${marks} your grade is C ,need improvement`);
   
    } 
    if(marks<=0 || marks > 100 || (typeof marks!= "number")){
        console.log(`Please provide the valid marks - ${marks}`);
   
    }
 
    
    
    
    }
    gradeCalculation(0);
    gradeCalculation(150);
    gradeCalculation(-7);
    gradeCalculation("25");
    gradeCalculation("Seventy One");
    gradeCalculation(NaN);// 
    gradeCalculation(undefined);//
    gradeCalculation(null);//
    gradeCalculation(95);
    gradeCalculation(80);
    gradeCalculation(51);
    gradeCalculation(35);


    console.log(`==================== step 1 =============`);
    function voteEligible(vote){
        if (vote>=18 && vote<100 ) {
            console.log(` Age is ${vote} Eligible for voting`);
            
        }
        if (vote>0 && vote<18) {
            console.log(` Age is ${vote} not eligible for voting`);
            
        }
        
        if(vote<=0 || vote>100 || (typeof vote!= "number")){
            console.log(`Please provide the valid age - ${vote}`);
       
        }

    }
    voteEligible(45);
    voteEligible(17);
    voteEligible(8);
    voteEligible(20);
    voteEligible(-10);
    voteEligible(200);
    voteEligible(0);
    voteEligible(undefined);
    voteEligible(null);
    

