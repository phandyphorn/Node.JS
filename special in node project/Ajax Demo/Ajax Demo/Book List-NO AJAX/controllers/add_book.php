<?php
require_once(realpath(dirname(__FILE__) . '/../models/books.php'));

$title = $_POST['book_name'];
addBook($title);
header('location: /index.php');
