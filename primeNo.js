function primeNumbers(startValue,totalPrime){
    let count = 0;
    let num = startValue;
    const arrayOfPrime = [];
    while (count<totalPrime) {
        let isPrimeNum = isPrime(num);
        if(isPrimeNum) {
            count++;
            arrayOfPrime.push(num);
        }
        num++;
    } 
    console.log(arrayOfPrime); 
}

function isPrime(num){
    for (let index = 2; index < num; index++) { // num = 7 index= 7
        if(num%index ==0) {// 7%6==0
            return false;
        }
    }
    return true;
}
primeNumbers(3, 10);
primeNumbers(20, 10);
primeNumbers(50, 15);




function isPrime (n) {
    for(let i = 2; i <= n/2; i++){
        if(n % i === 0){
          return false;
        }
    }
    return true;
  }
  function firstTenPrimeNum  (num)  {
    const array = [];
    let i = 2;
    while(array.length < num){
        if(isPrime(i)){
          array.push(i);
        }
        i = i === 2 ? i+1 : i+2;
    }
    return array;
  }
  console.log(firstTenPrimeNum(10));