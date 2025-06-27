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
  // Method to withdraw money
    this.withdraw = function(amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be positive.");
        } else if (amount > this.balance) {
            console.log(`Insufficient funds! ${this.owner} has only R${this.balance}`);
        } else {
            this.balance -= amount;
            console.log(`${this.owner} withdrew R${amount}. Remaining balance: R${this.balance}`);
        }
    };
    
