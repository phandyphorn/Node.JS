var loadImage = function(event) {
    var image = document.getElementById('img-post');
    image.src = URL.createObjectURL(event.target.files[0]);
    
    let btn = document.getElementById('btn');
    btn.style.display = 'block';
};