// A Library object representing a mini digital library system
const library = {
    name: "City Library",
    location: "Downtown",
    books: [
        { title: "1984", author: "George Orwell", isAvailable: true },
        { title: "To Kill a Mockingbird", author: "Harper Lee", isAvailable: true },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", isAvailable: false }
    ],

    // Method to display all available books
    showAvailableBooks: function () {
        console.log(`📚 Available books in ${this.name}:`);
        this.books.forEach(book => {
            if (book.isAvailable) {
                console.log(`- ${book.title} by ${book.author}`);
            }
        });
    },

    // Method to borrow a book by title
    borrowBook: function (title) {
        const book = this.books.find(b => b.title === title);
        if (book) {
            if (book.isAvailable) {
                book.isAvailable = false;
                console.log(`✅ You borrowed "${book.title}"`);
            } else {
                console.log(`❌ "${book.title}" is currently not available`);
            }
        } else {
            console.log(`❌ Book titled "${title}" not found in the library.`);
        }
    },

    // Method to return a book
    returnBook: function (title) {
        const book = this.books.find(b => b.title === title);
        if (book) {
            book.isAvailable = true;
            console.log(`🔁 You returned "${book.title}". Thank you!`);
        } else {
            console.log(`⚠️ This book doesn't belong to ${this.name}.`);
        }
    },

    // Method to add a new book
    addBook: function (title, author) {
        this.books.push({
            title: title,
            author: author,
            isAvailable: true
        });
        console.log(`📗 New book added: "${title}" by ${author}`);
    }
};

// Usage examples
library.showAvailableBooks(); // Lists only books that are available

library.borrowBook("1984");   // Marks the book as borrowed
library.borrowBook("1984");   // Tries to borrow again, should say not available

library.returnBook("1984");   // Marks it available again

library.addBook("Brave New World", "Aldous Huxley"); // Adds a new book

library.showAvailableBooks(); // Updated list
