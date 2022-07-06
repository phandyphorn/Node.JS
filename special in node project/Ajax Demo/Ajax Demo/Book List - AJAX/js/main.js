// Add book to server
function addBook() {
  let bookName = document.getElementById("book_name").value;
  $("table").load("controllers/add_book.php", { book_name: bookName });
}

// Delete book from the server
function deleteBook(id) {
  $("table").load("controllers/delete_book.php?book_id=" + id);
}