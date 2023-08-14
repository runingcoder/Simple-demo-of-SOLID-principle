"use strict";
class Football {
    constructor(brand, size, footballRepo) {
        this.brand = brand;
        this.size = size;
        this.footballRepo = footballRepo;
    }
    getAllFootballNames() {
        const allFootballs = this.footballRepo.getAllFootballs();
        return allFootballs.map(football => football.brand);
    }
}
class FootballRepository {
    constructor() {
        this.footballs = [];
    }
    addFootball(football) {
        this.footballs.push(football);
    }
    getAllFootballs() {
        return this.footballs;
    }
}
const footballRepo = new FootballRepository();
const adidasFootball = new Football("Adidas", 5, footballRepo);
const nikeFootball = new Football("Nike", 4, footballRepo);
footballRepo.addFootball(adidasFootball);
footballRepo.addFootball(nikeFootball);
const allFootballNames = adidasFootball.getAllFootballNames();
console.log("All Football Names:", allFootballNames);
// Explanation: Here, the abstraction,IFootballRepository doesn't depend on the details of FootballRepository
// class but FootballRepository depends on the abstraction instead.
// The higher class Football now doesn't directly depend on the lower class Footballrepository.
