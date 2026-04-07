//Grabing the div tag to update information
let div = document.getElementById("movie-info");

// Define the Movie class
class Movie{
  #title;
  #cast;
  #description;
  #rating;
    // title, cast, description, rating
  constructor(title, cast, description, rating){
    this.#title = title;
    this.#cast = cast;
    this.#description = description;
    this.#rating = rating;

  }
  //get property function
  getMyProperty(){
    return this.#title;

    
  }
  // Method to update the rating of the movie
  updateRating(newRating){
    this.rating = newRating;
  }
   // Method to display the movie's information
  displayInfo(){
    //Should Ido this instead: 
    div.innerHTML = "<p> Title:"+ this.#title +"</p>" + "<p> Description: " + this.#description + "</p>"  + "<p> Cast: " + this.#cast + "</p>" + "<p> Rating: " + this.#rating + "</p>"
    
    
    
    //<p>Cast:" + this.#cast + "</p><p>Description:"+ this.#description + "</p><p>Rating:"+ this.#rating + "</p>";
    //document.getElementById("Movie-info").innerHTML = "<p>Cast:" + this.#cast + "</p>";
    //document.getElementById("Movie-info")

    //text1.innerHTML = this.#title;
    //text.innerHTML = this.#cast;
    //div.innerHTML = this.#description;
    //div.innerHTML = this.#rating;

  }
};
let movie_obj = new Movie("Zootopia", ["Shakira", " Dwayne Johnson"],"Judy Hopps and Nick Wilde find themselves on the twisting trail of a great mystery", 7.4 )
movie_obj.displayInfo()
let films =  [movie_obj];
//for (let i = 0; i < films.length; i++){
  //
//}

function updateMovieRating(title, newRating){
  for (let movie1 = 0; movie1 < films.length; movie1++ ){
    if this.#title=
  }
  this.#title += title;
  //this.#rating += rating;
}

//for (let i = 0; i < films.length; i++){

//}

 


// Test your implementation

// Display the initial information of the movie

// Update the rating of the movie

// Display the updated information of the movie