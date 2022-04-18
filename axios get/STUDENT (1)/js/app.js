function requestImage(event) {
  event.preventDefault();

  // TODO 1 : define the full URL to request the image information entered in the input
 
  // const key = "14001068-da63091f2a2cb98e1d7cc1d82";
  const key = "26372570-d5b3351e6fd484f8ff6002860"
  let url = "https://pixabay.com/api/?key="+key+"&q="+searchInput.value; // TODO: add API Key and value that we get from input
  console.log(url)

  // We call teh request the URL
  axios.get(url).then((response) => {
    // if response succeeded 
    let allData = response.data;
    let hits = allData.hits;
    console.log(hits)

    // TODO: get data from response and display it to browser 
    
    // remove the post-img div
    // let deleteDiv = post.querySelector(".post-img");
    // deleteDiv.remove();
    document.querySelector(".post-img").remove();

    // create new post-img div with class post-img
    let postImage = document.createElement("div");
    postImage.className = 'post-img';
    post.appendChild(postImage)
   
    // display image to browser
    // length
    for(let i=0; i<hits.length; i++){
      let hit = hits[i];
      let img = document.createElement("img");
      console.log(hit.largeImageURL);
      img.src = hit.largeImageURL;
      postImage.appendChild(img)
    }
    
  
  })
  .catch((error) => {
    // if response failed
    console.log(error);
  });
  
}

const post = document.querySelector(".post");

const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", requestImage);
