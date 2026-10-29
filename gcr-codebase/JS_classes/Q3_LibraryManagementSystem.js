
"use strict";

// Create Book class
class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    // Issue a book
    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(`${this.title} has been issued successfully.`);
        } else {
            console.log(`${this.title} is already issued.`);
        }
    }

    // Return a book
    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            console.log(`${this.title} has been returned successfully.`);
        } else {
            console.log(`${this.title} is not issued.`);
        }
    }
}

// Create an array of book objects
const books = [
    new Book("Java Programming", "James Gosling", "101"),
    new Book("Python Basics", "Guido van Rossum", "102"),
    new Book("JavaScript Guide", "Brendan Eich", "103"),
    new Book("Data Structures", "Mark Allen", "104", true)
];

// Display all available books
function displayAvailableBooks() {
    console.log("\nAvailable Books:");

    const availableBooks = books.filter(book => !book.isIssued);

    if (availableBooks.length === 0) {
        console.log("No books are available.");
    } else {
        availableBooks.forEach(book => {
            console.log(
                `Title: ${book.title}, Author: ${book.author}, ISBN: ${book.ISBN}`
            );
        });
    }
}

// Issue a book by searching ISBN
function issueBookByISBN(isbn) {
    const book = books.find(book => book.ISBN === isbn);

    if (book) {
        book.issueBook();
    } else {
        console.log("Book not found!");
    }
}

// Display available books
displayAvailableBooks();

// Issue a book using ISBN
const searchISBN = "102";
issueBookByISBN(searchISBN);

// Display available books after issuing
displayAvailableBooks();
