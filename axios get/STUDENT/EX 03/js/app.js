const input = document.querySelector('#search');
const searchButton = document.querySelector('#search-this');
const form =document.querySelector('.form-inline');
const container = document.getElementsByClassName("container")[0];
const SEARCH_KEY = "search_query";
const MOVIES_KEY = "movie_list";

function displaySearch(){
    // TODO

    //COPY FROM EXERCISE 2
}


function displayMovieList(movieList){
    // TODO

    //COPY FROM EXERCISE 1

}


function displayOneMovie(movieObject, idNumber, ul){
    // TODO

    //COPY FROM EXERCISE 1


}


// Use local storage to keep in store the search 

function saveSearch (search_query){
     // TODO
    // Save your data to localStorage

}

function loadData(){
    // TODO

    //get data from localstorage
    

    //set value to input field (search bar)
    

    // call displaySearch function
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