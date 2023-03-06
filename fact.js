function fact(n)
{
    var fact1=1;
    // var n=5;
    if(n>0){
    var result=fact1*n;
    n--;
    }
    console.log(result);
}
fact(5);