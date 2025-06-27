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

  
 
