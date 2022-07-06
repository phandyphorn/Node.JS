<?php
require_once(realpath(dirname(__FILE__) . '/models/books.php'));

?>

<link rel="stylesheet" href="css/style.css">

<!-- Form input data  -->
<form action="/controllers/add_book.php" method="post">
  <input id="book_name" type="text" name="book_name" placeholder="Input book name">
  <button type="submit">Add</button>
</form>

<!-- Display data  -->
<div id="container">
  <table>
    <!-- Header of table -->+
    <tr>
      <th>Book_id</th>
      <th>Title</th>
      <th>controllers</th>
    </tr>
    <?php
    // Get all data form database and display
    $books = getBooks();

    foreach ($books as $book) :
    ?>
      <!-- body of table  -->
      <tr>
        <td><?= $book['book_id'] ?></td>
        <td><?= $book['title'] ?></td>
        <td><a href="controllers/delete_book.php?book_id=<?= $book['book_id'] ?>">delete</a></td>
      </tr>
    <?php
    endforeach;
    ?>
  </table>
</div>

<script src="js/main.js"></script>