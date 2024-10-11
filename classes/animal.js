// class is a template for objects
export class Animal {
    // used when initializing an instance
    constructor(type, legs, sound){
        // 'this' keyword applies to newly created object
        this.type = type;
        this.legs = legs;
        this.sound = sound;
    }

    // declaring a property - used by all instance
    greeting = "hello";

    // declaring a function - used by all instance
    makeNoise() {
        console.log(this.sound);
    }

    // static variables/functions - cannot be accessed by the instances. This is only accessed by the class itself
    static giveMe5() {
        return 5;
    }

    // get method - used to return instance property
    // getter
    get metaData() {
        return `Type: ${this.type} | Legs: ${this.legs}`;
    }

    get getSound() {
        return this.sound;
    }
}

// dog is an instance or an object
let dog = new Animal("Mammal", 4, "Arf!");
console.log(dog.type);

// declaring a new object
let cat = new Animal("Feline", 4, "Meow!");
console.log(cat.legs);

dog.makeNoise();
console.log(dog);
console.log(cat.greeting);

// this will produce an error since giveMe5 is static
// cat.giveMe5();

console.log(Animal.giveMe5());

// error since makeNoise function is for the instance
// Animal.makeNoise();

// get - acts like a property
console.log(cat.metaData);
console.log(dog.metaData);
console.log(dog.getSound);