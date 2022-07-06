<?php
    require_once("../models/upload_image.php");

    $file_image = $_FILES['file_image'];
    
    // put file in folder images
    $newname = moveFile($file_image);

    if (!empty($newname)) {
        uploadImage($newname);
    }

    header('location: /index.php');