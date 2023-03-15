console.log(`==============Set Of Object Assignment B===============`);
console.log(`-------Object Created Using Class and initializwd using constructor---------- `);
let bank={
bankName :"bankName",
location : "location",
accountNumber : "accountNumber",
ifscCode : "ifscCode",
interestRate : "interestRate"
}

class Bank {
    constructor(bankName, location, accountNumber, ifscCode, interestRate, ){
        this.bankName = bankName;
        this.location = location;
        this.accountNumber = accountNumber;
        this.ifscCode = ifscCode;
        this.interestRate = interestRate;
      
    }
}
    const axisBank = new Bank("Axis Bank", "Pune", "10203040", "AXIS001","9.4");
console.log(axisBank);

const sbiBank = new Bank("SBI Bank", "Mumbai", "12345678", "SBI2","9");
console.log(sbiBank);

const iciciBank = new Bank("ICICI Bank", "Solapur", "01020304", "ICICI003","8");
console.log(iciciBank);

const kotakBank = new Bank("KOTAK Bank", "Satara", "11223344", "KTK004","8.7");
console.log(kotakBank);

const hdfcBank = new Bank("HDFC Bank", "Nashik", "10111213", "HDFC005","11");
console.log(hdfcBank);

const pnbBank = new Bank("PNB Bank", "Kolhapur", "10203040", "PNB001","10.5");
console.log(pnbBank);

const setOfBank=new Set();
setOfBank.add(axisBank);
setOfBank.add(sbiBank);
setOfBank.add(iciciBank);
setOfBank.add(kotakBank);
setOfBank.add(hdfcBank);
setOfBank.add(pnbBank);

console.log(`-----------Add All Object in Set---------------`);
console.log(setOfBank);

console.log(`-----------Traverse Set using For Of loop---------------`);
for (const bank of setOfBank) {
    console.log(`Bank Name is: ${bank.bankName} , Bank Location is : ${bank.location}`);
    
}


