function addressMaker(address){
    // object destructuring
    const { city, street } = address;
    const country = "Philippines";

    // object literals
    const newAddress = {
        city,
        street,
        country,
    };

    // template literals
    console.log(`${newAddress.city}, ${newAddress.street}, ${newAddress.country}`);
}

addressMaker({city: 'Quezon', street: 'Ortigas Avenue'});