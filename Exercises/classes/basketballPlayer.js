import { Player } from "./player.js";

class BasketballPlayer extends Player {
    constructor(name, country, age){
        super(name, country);
        this.age = age;
    }

    playerIntro() {
        console.log(`${this.name} is ${this.age} years old and knows how to play basketball.`);
    }
}

let james = new BasketballPlayer("Lebron James", "America", 34);
james.playerIntro();
james.introduction();