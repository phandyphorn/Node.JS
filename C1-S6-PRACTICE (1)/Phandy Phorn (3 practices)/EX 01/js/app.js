const container = document.getElementsByClassName("container")[0];
const updateBtn = document.getElementById("update-list");

/**
 * This function is used to loop on data (get all the movies) and it will
 * call the displayOneMovie for each movie in list
 */
function displayMovieList (list){
   // TODO *

   // Remove every movies in DOM
   document.querySelector(".list-of-movies").remove();

   // Loop in list

   // For each movie, create new element in DOM and call displayOneMovie
   let ul = document.createElement("ul");
   ul.className = "list-of-movies";

   document.querySelector(".movies-data").appendChild(ul)

   for(let data of list){
    //    data is the same to movieObject===============
    //    all data are in ul
    //    call function that create each li to use.
    displayOneMovie(data,ul);
   }
}

/**
 * This function is focus on DOM elements used to display only one movie 
 * when we call and give paramaters (movieObject, list)
 * @param movieObject = Object representing a movie with structure: {Title: "", Year: "", Type: "", Poster: ""}
 * @param ul = the ul DOM element where to append the new movie
 */

// MovieObject is the parameter. but when we call this function to use parameter have to respect to loop. Like data 
function displayOneMovie (movieObject, ul){
    // TODO *
    // Create li for each movie.
    let li = document.createElement("li");
    li.className = "post"

    let h = document.createElement("h1");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    h.textContent = "Title: " +  movieObject.Title;
    p1.textContent = "Year: " +  movieObject.Year;
    p2.textContent = "Type: " +  movieObject.Type;



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

let movieList = [
    {Title: "Twin Peaks: Fire Walk with Me", Year: "1992", Type: "movie", Poster: "https://media.senscritique.com/media/000015367870/source_big/Twin_Peaks_Les_7_derniers_jours_de_Laura_Palmer.jpg"},
    {Title: "Blade runner", Year: "1982", Type: "movie", Poster: "https://www.telerama.fr/sites/tr_master/files/styles/simplecrop1000/public/blade_runner016_0.jpg?itok=CH-FSW2S&sc=99a30588b721ecf76154228ac8518698"},
    {Title: "Twelve angry man", Year: "1957", Type: "movie", Poster: "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg"}
];


updateBtn.addEventListener('click', function() {displayMovieList(movieList)});

