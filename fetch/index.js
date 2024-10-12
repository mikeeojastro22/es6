// fetch function accepts an endpoint as an argument
// .then - parses the value returned by fetch
// second .then - prcoesses the data from the parsed value
fetch("https://jsonplaceholder.typicode.com/comments/5")
.then((data) => data.json())
.then((info) => {
    const { postId, id, name, email, body } = info;
    console.log(`postId: ${postId} | id: ${id} | name: ${name} | email: ${email} | body: ${body}`);
});

// prints the promise
// fetch("https://jsonplaceholder.typicode.com/comments/1")
// .then((data) => console.log(data.json()))