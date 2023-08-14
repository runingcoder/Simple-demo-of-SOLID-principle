class Movie {
    constructor(private _director: string, private _title: string) {}

    get director(): string {
        return this._director;
    }

    get title(): string {
        return this._title;
    }
}

class MovieDatabase {
    // Simulated database storage
    private movies: Movie[] = [];

    saveMovie(movie: Movie): void {
        // Save movie information in the database
        this.movies.push(movie);
    }
}

const movie3 = new Movie("Eiichiro Oda", "One Piece");
const movie4 = new Movie("Greta Gerwig", "Barbie");

// Declare instance of the MovieDatabase class
const movieDatabase = new MovieDatabase();

// Accessing properties and methods of the Movie instances
console.log(movie1.title);       // Accessing title using getter method
console.log(movie2.director);    // Accessing director using getter method

// Save movies using the MovieDatabase instance
movieDatabase.saveMovie(movie3);
movieDatabase.saveMovie(movie4);
console.log(movieDatabase);