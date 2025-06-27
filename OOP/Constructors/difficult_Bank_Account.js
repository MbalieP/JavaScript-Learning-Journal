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

 
