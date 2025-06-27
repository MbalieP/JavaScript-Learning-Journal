//  Constructor function for creating bank account objects
function BankAccount(owner, balance = 0) {
    this.owner = owner;         //  Account holder's name
    this.balance = balance;     // Initial balance in ZAR

    //  Method to deposit money
    this.deposit = function(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`${this.owner} deposited R${amount}. New balance: R${this.balance}`);
        } else {
            console.log(" Deposit amount must be positive.");
        }
    };
