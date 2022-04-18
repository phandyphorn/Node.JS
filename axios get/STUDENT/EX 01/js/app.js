const container = document.getElementsByClassName("container")[0];
const updateBtn = document.getElementById("update-list");

/**
 * This function is used to loop on data (get all the movies) and it will
 * call the displayOneMovie for each movie in list
 */
function displayMovieList (list){


   // TODO *
    // Remove every movies in DOM

    
    // For each movie, create new element in DOM and call displayOneMovie
       




   // Loop in list
    
   
}

/**
 * This function is focus on DOM elements used to display only one movie 
 * when we call and give paramaters (movieObject, list)
 * @param movieObject = Object representing a movie with structure: {Title: "", Year: "", Type: "", Poster: ""}
 * @param ul = the ul DOM element where to append the new movie
 */
function displayOneMovie (movieObject, ul){
    let ul = document.querySelector(".list-of-movies");
    let li = document.querySelector(".post");


    
    // TODO *
}

let movieList = [
    {Title: "Twin Peaks: Fire Walk with Me", Year: "1992", Type: "movie", Poster: "https://media.senscritique.com/media/000015367870/source_big/Twin_Peaks_Les_7_derniers_jours_de_Laura_Palmer.jpg"},
    {Title: "Blade runner", Year: "1982", Type: "movie", Poster: "https://www.telerama.fr/sites/tr_master/files/styles/simplecrop1000/public/blade_runner016_0.jpg?itok=CH-FSW2S&sc=99a30588b721ecf76154228ac8518698"},
    {Title: "Twelve angry man", Year: "1957", Type: "movie", Poster: "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg"}
];

updateBtn.addEventListener('click', function() {displayMovieList(movieList)});

