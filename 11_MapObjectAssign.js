console.log(`============Map Of Object Assignment_A===============`);
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
        const axisBank = new Bank("Axis Bank", "Pune", "AXS10203040", "AXIS001","9.4");
    console.log(axisBank);
    
    
    const sbiBank = new Bank("SBI Bank", "Mumbai", "SBI12345678", "SBI2","9");
    console.log(sbiBank);
    
    
    const iciciBank = new Bank("ICICI Bank", "Solapur", "ICICI01020304", "ICICI003","8");
    console.log(iciciBank);
    
    
    const kotakBank = new Bank("KOTAK Bank", "Satara", "KTK11223344", "KTK004","8.7");
    console.log(kotakBank);
    
    
    const hdfcBank = new Bank("HDFC Bank", "Nashik", "HDFC10111213", "HDFC005","11");
    console.log(hdfcBank);
    
    const pnbBank = new Bank("PNB Bank", "Kolhapur", "PNB10203040", "PNB001","10.5");
    console.log(pnbBank);

const mapOfBank= new Map();
mapOfBank.set("AXS10203040" , axisBank);
mapOfBank.set("SBI12345678" , sbiBank);
mapOfBank.set("ICICI01020304" , iciciBank);
mapOfBank.set("KTK11223344" , kotakBank);
mapOfBank.set("HDFC10111213" , hdfcBank);
mapOfBank.set("PNB10203040" , pnbBank);

console.log(`-----------Add All Object in Map : key is Account Number & value is Object---------------`);
console.log(mapOfBank);

console.log(`---------------Traverse the map for Bank Name, Account number and Interest Rate---------------`);

const element=mapOfBank.get("AXS10203040")
const keysOfMap=mapOfBank.keys();
for (const key of keysOfMap) {
    const element=mapOfBank.get(key)
console.log(`Bank Name is: ${element.bankName} , Account Number is : ${element.accountNumber} , Interest Rate is : ${element.interestRate}`);
}

