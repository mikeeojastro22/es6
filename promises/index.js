// resolve = run without errors or it means it is successful
// reject = run with error or it means that it is unsuccessful
const buyFlightTicket = () => {
    return new Promise( (resolve, reject) => {
        // setTimeout(function, timeInMilliseconds)
        setTimeout(() => {
            // this is usually the process that we are waiting for
            // this is usually the part where we query the database etc
            const error = false;
            if(error){
                reject("Error occured. You cannot book a flight");
            } else {
                resolve("You successfully booked a flight!");
            }
        }, 3000);
    });
}

// success - whatever we placed inside rosolve
// fail - whatever we placed inside reject
buyFlightTicket()
.then((success) => console.log(success))
.catch((fail) => console.log(fail));