// object destructuring - process of extracting properties from object and turn them into variables

const player = {
    name: "Kobe Bryant",
    club: "LA Lakers",
    address: {
        city: "Los Angeles"
    }
};

// dot notation
console.log(player.club);

// bracket notation
console.log(player["name"]);

// object destructuring
// existing properties
const { name, club, address } = player;
const { city } = address;

console.log(`${name} is from ${club} ${city}`);

// Object Literals
// Old way of creating an object inside a function

function addressMaker(city, country){
    const address = {
        newCity: city,
        newCountry: country
    };

    console.log(address);
}

addressMaker("Manila", "Philipines");

// Creating an object inside a function now

function newAddressMaker(city, country){
    const address = { 
        city,
        country
    };

    console.log(address);
}

newAddressMaker("Seoul", "South Korea");

// For of

let incomes = [62000, 67000, 75000];
let total = 0;

// income - any variable that will represent each element in our iterable object
// incomes - iterable object
// for of - keyword for indicating that we're going through an iterable object. You don't need to access them by index.
for (const income of incomes){
    // total = total + income;
    total += income;
}

console.log(`Total income is ${total}`);

// string is an iterable object
let fullName = "Tony Stark";

for (const char of fullName){
    console.log(char);
}
