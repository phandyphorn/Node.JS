<div class="card mb-2  card-body">
    <img id = "img-post" class="image-profile " src="../images/pic.png" width="100%">
</div>
<form action="controllers/upload_image_controller.php" enctype= multipart/form-data method="POST">
    <input type="file" name="file_image" id="profile" onchange="loadImage(event)" style="display:none" accept="image/png, image/gif, image/jpeg , image/jpg" >
    <div class="d-flex mb-3">
        <label for="profile" class="btn btn-primary m-1">ADD IMAGE</label>
        <button type="submit" id="btn" class="btn btn-primary m-1" style="display:none;" >POST</button>
    </div>
</form>