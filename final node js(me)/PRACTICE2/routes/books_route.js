const { Route } = require('express');
const express = require('express');
let router = express.Router();

let books = [
    { id: 1, title: "The Lord of the Rings", author: "Tolkien" },
    { id: 2, title: "Hamlet", author: "Shakespeare" },
    { id: 3, title: "Harry Potter", author: "Rowling" },
    { id: 4, title: "Romeo and Juliet", author: "Shakespeare" },
    { id: 5, title: "The Odyssey", author: "Homer" }
];

// TODO: DEFINE THE 4 ROUTES HERE

// Get all the books
router.get('/', (req, res) => {
    res.send(books)
})


// Create a new book
router.post('/createBook',(req, res) => {
    let book = req.body;
    let addBookToBook = books.push(book);
    if (addBookToBook){
        res.send(books);
    }
})

// Update one book by id
router.put('/editBook/:id', (req, res) => {
    let bookId = req.params.id;
    
})

// Delete books by author
router.delete('/deleteBook/:author', (req, res) => {
    let bookAuthor = req.params.author;
    for (let book of books){
        if (book.author == bookAuthor){
            let deleteBook =books.splice(bookAuthor,1);
            if (deleteBook){
                res.send(books)
            }
        }
    }
})
module.exports = router;