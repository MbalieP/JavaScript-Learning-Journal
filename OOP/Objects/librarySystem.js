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

    
    

  
