function expression(grdScore,hscScore,sscScore,candidateName){
    if(grdScore>=70 || hscScore>=80 || sscScore>=90){
        console.log(`congrates ${candidateName} you are eligible for TCS interview`);

    }else{
        console.log(`unfortunately ${candidateName} you are not eligible for TCS interview`);
    }

}
expression(80,86,90,"akshay");
expression(70,65,80,"bhagyawan");
expression(60,79,88,"rushikesh");