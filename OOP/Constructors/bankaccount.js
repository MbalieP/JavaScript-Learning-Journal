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
    //  Creating  bank accounts
const account1 = new BankAccount("Mbali", 1500);  // Starting with R1500
const account2 = new BankAccount("Thabo", 750);   // Starting with R750
        // Method to check the balance
    this.getBalance = function() {
        console.log(` ${this.owner}'s current balance: R${this.balance}`);
    };
 /  Interacting with the accounts
account1.deposit(500);        // Mbali deposits R500 → R2000
account1.withdraw(300);       // Mbali withdraws R300 → R1700
account1.getBalance();        // Mbali's current balance: R1700
   
    
    
