import { Animal } from "./animal.js";

// using the extends keyword for inheritance
class Cat extends Animal {
    constructor(type, legs, sound, color){
        // this.type = type;
        // this.legs = legs;
        // this.sound = sound;
        // super keyword - inherits the constructor from its parent
        super(type, legs, sound);
        this.color = color;
    }
}

let mingming = new Cat("Feline", 4, "MEOOOOOW!!!!", "orange");
mingming.makeNoise();
console.log(mingming.color);