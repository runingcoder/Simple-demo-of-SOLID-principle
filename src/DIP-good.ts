class Football {
    constructor(public brand: string, public size: number, private footballRepo: IFootballRepository) {}

    getAllFootballNames(): string[] {
        const allFootballs = this.footballRepo.getAllFootballs();
        return allFootballs.map(football => football.brand);
    }
}

interface IFootballRepository {
    getAllFootballs(): Football[];
}

class FootballRepository implements IFootballRepository {
    private readonly footballs: Football[] = [];

    addFootball(football: Football): void {
        this.footballs.push(football);
    }

    getAllFootballs(): Football[] {
        return this.footballs;
    }
}

const footballRepo: FootballRepository = new FootballRepository(); 
const adidasFootball = new Football("Adidas", 5, footballRepo);
const nikeFootball = new Football("Nike", 4, footballRepo);
footballRepo.addFootball(adidasFootball);
footballRepo.addFootball(nikeFootball);
const allFootballNames = adidasFootball.getAllFootballNames();
console.log("All Football Names:", allFootballNames);

// Explanation: Here, the abstraction,IFootballRepository doesn't depend on the details of FootballRepository
// class but FootballRepository depends on the abstraction instead.
// The higher class Football now doesn't directly depend on the lower class Footballrepository.
