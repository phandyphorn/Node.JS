const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('server listening');
});

let booksRouter = require('./routes/books_route');

app.use('/books', booksRouter);
