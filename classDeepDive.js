class CoolGuy {
    // will be overridden by the constructor
    specialTrick = 'nothing';

    constructor(trick) {
        this.specialTrick = trick;
    }

    showOff() {
        console.log(`Here's my trick: ${this.specialTrick}`);
    }
}

// instantiate an object/instance
let joe = new CoolGuy("Skateboarding");
joe.showOff();

class Vehicle {
    engines = 1;

    ignition() {
        console.log("Turning on my engine");
    }

    drive() {
        this.ignition();
        console.log("Steering and moving forward");
    }
}

let temp = new Vehicle();
temp.drive();

class Car extends Vehicle {
    wheels = 4;

    // this overrides the drive function from its parent's class
    // comment this out to see if it will invoke its parent's function
    drive() {
        console.log(`Rolling on all ${this.wheels} wheels!`);
    }
}

let joesCar = new Car();
joesCar.drive();

class SpeedBoat extends Vehicle {
    engines = 2;

    ignition() {
        console.log(`Turning on my ${this.engines} engines`);
    }
}

let joesSpeedBoat = new SpeedBoat();
joesSpeedBoat.ignition();
joesSpeedBoat.drive();