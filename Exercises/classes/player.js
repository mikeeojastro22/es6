export class Player {
    constructor(name, country){
        this.name = name;
        this.country = country;
    }

    introduction() {
        console.log(`${this.name} was born in ${this.country}`);
    }
}

let player = new Player("Messi", "Argentina");
player.introduction();