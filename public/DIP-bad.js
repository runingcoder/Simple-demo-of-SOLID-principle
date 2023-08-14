"use strict";
// DIP says 
// 1) high level class should not depend upon lower level class, both should depend upon abstraction 
// 2) Abstractions should not depend on details. Details should depend on abstractions.
// The following is a voilation as the higher class directly invokes the lower class.
class FOOTBALL {
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
class FOOTBALLREPOSITORY {
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
// Usage
const footballRepo1 = new FOOTBALLREPOSITORY();
const adidasFootball1 = new FOOTBALL("Adidas", 5, footballRepo1);
const nikeFootball1 = new FOOTBALL("Nike", 4, footballRepo1);
// Adding footballs to the repository
footballRepo1.addFootball(adidasFootball1);
footballRepo1.addFootball(nikeFootball1);
const allFootballNames1 = adidasFootball1.getAllFootballNames();
console.log("All Football Names:", allFootballNames1);
