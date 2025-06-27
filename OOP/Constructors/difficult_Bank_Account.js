class BankAccount {
    static bankName = "Mzansi National Bank"; // Shared by all accounts

    constructor(owner, accountType = "Cheque", balance = 0) {
        this.owner = owner;
        this.accountType = accountType;
        this.balance = balance;
        this.transactions = []; // Store all transactions
        this.accountNumber = BankAccount.generateAccountNumber();
    }

 
