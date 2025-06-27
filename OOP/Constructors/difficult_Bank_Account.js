class BankAccount {
    static bankName = "Mzansi National Bank"; // Shared by all accounts

    constructor(owner, accountType = "Cheque", balance = 0) {
        this.owner = owner;
        this.accountType = accountType;
        this.balance = balance;
        this.transactions = []; // Store all transactions
        this.accountNumber = BankAccount.generateAccountNumber();
    }
   // 📈 Deposit method with validation
    deposit(amount) {
        if (amount <= 0) {
            console.log("❌ Deposit must be more than R0");
            return;
        }
        this.balance += amount;
        this.transactions.push({
            type: "Deposit",
            amount: amount,
            date: new Date()
        });
        console.log(`✅ ${this.owner} deposited ${this.formatRands(amount)}. New balance: ${this.formatRands(this.balance)}`);
    
    }
    // 📌 Usage example
BankAccount.getBankInfo();  // Static method call

const acc1 = new BankAccount("Mbali", "Savings", 3000);
const acc2 = new BankAccount("Lebo", "Cheque", 1000);

// Transactions
acc1.deposit(2000);
acc1.withdraw(500);
acc1.withdraw(10000); // Should fail
acc1.getBalance();
acc1.showTransactions();    


  

  

console.log("\n---\n");

acc2.deposit(500);
acc2.withdraw(300);
acc2.getBalance();
acc2.showTransactions();

  // 📉 Withdraw method with error handling
    withdraw(amount) {
        if (amount <= 0) {
            console.log("❌ Withdrawal must be more than R0");
            return;
        }
        if (amount > this.balance) {
            console.log(`🚫 Insufficient funds! ${this.owner} has only ${this.formatRands(this.balance)}`);
            return;
        }
        this.balance -= amount;
        this.transactions.push({
            type: "Withdrawal",
            amount: amount,
            date: new Date()
        });
        console.log(`✅ ${this.owner} withdrew ${this.formatRands(amount)}. New balance: ${this.formatRands(this.balance)}`);
    }

    // 🧾 Show transaction history
    showTransactions() {
        console.log(`📜 Transaction history for ${this.owner} (Account #${this.accountNumber}):`);
        if (this.transactions.length === 0) {
            console.log("No transactions yet.");
            return;
        }
        this.transactions.forEach((tx, index) => {
            const dateStr = tx.date.toLocaleString();
            console.log(`${index + 1}. ${tx.type} of ${this.formatRands(tx.amount)} on ${dateStr}`);
        });
    }
      // 💰 Check balance
    getBalance() {
        console.log(`💼 ${this.owner}'s balance: ${this.formatRands(this.balance)}`);
    }

    // 🌐 Static method for generating unique account numbers
    static generateAccountNumber() {
        return Math.floor(100000000 + Math.random() * 900000000); // Random 9-digit number
    }

    // 📦 Format amounts into Rands (R1,234.56)
    formatRands(amount) {
        return amount.toLocaleString("en-ZA", {
            style: "currency",
            currency: "ZAR"
        });
    }

    // 🏦 Static method to get bank info
    static getBankInfo() {
        console.log(`🏦 Welcome to ${this.bankName}`);
    }
}


 
