const input = document.querySelector('#search');
const searchButton = document.querySelector('#search-this');
const form =document.querySelector('.form-inline');
const container = document.getElementsByClassName("container")[0];
const SEARCH_KEY = "search_query";
const MOVIES_KEY = "movie_list";
const url = "https://www.omdbapi.com/?apikey=fab8d88e&s=";
const containerChild = container.children;

function displaySearch(){
    // TODO

    //COPY FROM EXERCISE 2
    //TODO*
    // Get search parameter from user input
    let userInput = input.value;
    saveSearch(userInput);
    // Use axios to get data from API
    // console.log(url+userInput)
    axios
    .get(url+userInput)
    .then((response)=>{
        displayMovieList(response.data.Search)
    })
    .catch((error)=>{
        console.log(error)
        // It means that if result disply, it will remove before appear another. But it will not remove form to  input.
        if (containerChild.length >1){
            container.removeChild(container.children[1]);
        }

        let headingThree = document.createElement("h3");
        headingThree.textContent = "No movies matches this search request in our database."
        container.appendChild(headingThree)
    })
    // Display data on console
    
}

function displayMovieList(movieList){
    // TODO
    console.log(movieList)
    //COPY FROM EXERCISE 1
       // TODO *

   // Remove every movies in 
//    If container have more than form, it will remove.
   if (containerChild.length >1){
        container.removeChild(container.children[1]);

   }

   // Loop in list
   // For each movie, create new element in DOM and call displayOneMovie
   let ul = document.createElement("ul");
   ul.className = "list-of-movies";
   container.appendChild(ul);


   for(let data of movieList){
    displayOneMovie(data,ul);
   }
}

function displayOneMovie(movieObject, ul, idNumber){
    // TODO

    //COPY FROM EXERCISE 1

    // TODO *
    let li = document.createElement("li");
    li.className = "post"

    let h = document.createElement("h1");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    h.textContent = movieObject.Title;
    p1.textContent = movieObject.Year;
    p2.textContent = movieObject.Type;


    let img = document.createElement("img");
    img.className = "poster";

    img.src = movieObject.Poster;

    let divImg = document.createElement("div");
    divImg.className = "post-img";

    let divContent = document.createElement("div");
    divContent.className = "post-content";

    let hr = document.createElement("hr");

    divImg.appendChild(img);
    divContent.appendChild(h);
    divContent.appendChild(p1);
    divContent.appendChild(p2);

    li.appendChild(divImg);
    li.appendChild(divContent);

    ul.appendChild(li);
    ul.appendChild(hr)

}


// Use local storage to keep in store the search 

function saveSearch (search_query){
     // TODO
    // Save your data to localStorage
    localStorage.setItem("userInput", JSON.stringify(search_query));
}

function loadData(){
    // TODO

    //get data from localstorage
    let searchHistory = JSON.parse(localStorage.getItem("userInput"));

    //set value to input field (search bar)
    input.value = searchHistory;

    // call displaySearch function
    displaySearch();
}


function enterKeyPressed(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        displaySearch();
    }else{}
}

searchButton.addEventListener('click',displaySearch);
form.addEventListener('keydown',enterKeyPressed);

loadData();