<?php
$db = new PDO("mysql:host=localhost;dbname=uploadimage","root","");


function moveFile($file_image) {
    $extension = pathinfo($file_image['name'],PATHINFO_EXTENSION);
    $randomno=uniqid();
    // just rename old file name to contain date and randomno of number.
    $rename='image'.date('Ymd').$randomno;
    // rename old file to new file with extension.
    $newname=$rename.'.'.$extension;
    $target = "../images/" .$newname;
    $temporary=$file_image['tmp_name'];
    $size = $file_image['size'];
    $maxsize = 500000; //500kB max

    if ($extension == 'gif' || $extension == 'png'|| $extension == 'jpeg' || $extension == 'jpg') {
        if ($size < $maxsize) {
            if (move_uploaded_file($temporary,$target)) {
                return $newname;
            }
        }else{
            error_log("Size must be less than ".$maxsize."B");
        }
    }else{
        error_log("File type is not correct.");
    }
}

function uploadImage($file_image){
    global $db;
    $statement=$db->prepare("INSERT INTO pictures(image) VALUES(:image)");
    $statement->execute([
        ':image'=> $file_image,        
    ]);
    return ($statement->rowCount()==1);
}

function getImage() {
    global $db;
    $statement = $db -> query("SELECT * FROM pictures order by(id) DESC");
    return $statement->fetchAll();
}