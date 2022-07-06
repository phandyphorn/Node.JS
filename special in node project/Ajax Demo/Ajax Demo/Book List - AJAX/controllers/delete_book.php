<?php
require_once(realpath(dirname(__FILE__) . '/../models/books.php'));

$book_id = $_GET['book_id'];
deleteBook($book_id);
header('location: /index.php');
