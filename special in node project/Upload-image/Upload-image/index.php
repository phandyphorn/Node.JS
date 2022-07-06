<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UPLOAD IMAGES</title>
    <!-- link to bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- link to icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
    
    <div class="container mt-1 mb-1 col-4 p-3 bg-dark">
        <?php
            require_once('views/formUplaod.php');
        ?>
      
        <?php
        require_once('models/upload_image.php');
            $images = getImage();
            foreach($images as $image):
        ?>
        <div class="card mb-2 card-body">
           
                <img src="images/<?php echo $image['image']?>" alt="image"  width="100%">
       
        </div>
        <?php 
            endforeach;
        ?>
    </div>
</body> 
    <script src="../js/main.js"></script>
</html>
