<?php
require_once(realpath(dirname(__FILE__) . '/models/books.php'));

?>

<link rel="stylesheet" href="css/style.css">
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

<!-- Form input data  -->
<form>
  <input id="book_name" type="text" placeholder="Input book name">
  <button type="button" onclick="addBook()">Add</button>
</form>

<!-- Display data  -->
<div id="container">
  <table>
    <!-- Header of table -->
    <tr>
      <th>Book_id</th>
      <th>Title</th>
      <th>controller</th>
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
        <td><span onclick="deleteBook('<?= $book['book_id'] ?>')">delete</span></td>
      </tr>
    <?php
    endforeach;
    ?>
  </table>
</div>

<script src="js/main.js"></script>