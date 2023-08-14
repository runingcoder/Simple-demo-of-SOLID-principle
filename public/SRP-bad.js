"use strict";
// Single Responsibility Principle:
// states that:
// 1. A class should have one and only one reason to change, meaning that a class should have only one job.
// 2. The components within a class should be highly cohesive and loosely coupled.
// Example: Violation of SRP
class Cinema {
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
    save() {
        // Save cinema information in the database.
    }
}
const movie1 = new Cinema("Christopher Nolan", "Inception");
const movie2 = new Cinema("Steven Spielberg", "Jurassic Park");
console.log(movie1.title);
console.log(movie2.director);
movie1.save();
movie2.save();
// Explanation of why it doesn't follow SRP:
// The Cinema class has two responsibilities:
// 1. It stores information about a movie.
// 2. It saves the movie information in the database.
// If we want the class to have single repsonsibility, we need to separate the two responsibilities
//  into two different classes.
