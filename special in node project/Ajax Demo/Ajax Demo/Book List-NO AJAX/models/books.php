<?php
$db = new PDO("mysql:host=localhost;dbname=ajax_testing", "root", "");

// get data form database
function getBooks()
{
    global $db;
    $statement = $db->query("SELECT * FROM books;");
    $items = $statement->fetchAll();
    return $items;
}

// Delete book new item from database
function deleteBook($id)
{
    global $db;
    $statement = $db->prepare("DELETE FROM books WHERE book_id = :id");
    $statement->execute([
        ':id' => $id
    ]);
    return ($statement->rowCount() == 1);
}

function addBook($title)
{
    global $db;
    $statement = $db->prepare("INSERT INTO books(title) VALUES (:title)");
    $statement->execute([
        ':title' => $title
    ]);
    return ($statement->rowCount() == 1);
}
