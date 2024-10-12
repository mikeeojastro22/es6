const findUserData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userFound = true;
        const user = {
          firstName: "Naruto",
          age: 36,
          email: "hokage@email.com",
        };
        if (userFound) {
          resolve(user);
        } else {
          reject("User not found");
        }
      }, 3000);
    });
};
  
findUserData()
.then((user) => {
        const { firstName, age, email } = user;
        console.log(`${firstName} is ${age} years old and his email is ${email}`)
    }
)
.catch((error) => console.log(error));
  