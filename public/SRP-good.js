"use strict";
class Movie {
    constructor(_director, _title) {
        this._director = _director;
        this._title = _title;
    }
    get director() {
        return this._director;
    }
    get title() {
        return this._title;
    }
}
class MovieDatabase {
    constructor() {
        // Simulated database storage
        this.movies = [];
    }
    saveMovie(movie) {
        // Save movie information in the database
        this.movies.push(movie);
    }
}
const movie3 = new Movie("Eiichiro Oda", "One Piece");
const movie4 = new Movie("Greta Gerwig", "Barbie");
// Declare instance of the MovieDatabase class
const movieDatabase = new MovieDatabase();
// Accessing properties and methods of the Movie instances
console.log(movie1.title); // Accessing title using getter method
console.log(movie2.director); // Accessing director using getter method
// Save movies using the MovieDatabase instance
movieDatabase.saveMovie(movie3);
movieDatabase.saveMovie(movie4);
console.log(movieDatabase);
