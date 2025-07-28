const library = {
    books: [
        {
            title: "The Alchemist",
            author: "Paulo Coelho",
            year: 1988
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        }
    ],

    addBook(book) {
        this.books.push(book);
        console.log(`"${book.title}" has been added to the library.`);
    },

    listBooks() {
        console.log("Library Books:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.title} by ${book.author} (${book.year})`);
        });
    }
};


library.listBooks();

library.addBook({
    title: "1984",
    author: "George Orwell",
    year: 1949
});

library.listBooks();
