/* asnyc */
/* 


Promise: an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A Promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.


const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('Stuff worked!');
  }
  else {
    reject(Error('It broke'));
  }
})

promise.then(result => console.log(result)); // "Stuff worked!"
promise.catch(error => console.log(error)); // Error: "It broke"
the catch will catch errors from the then block as well as the promise constructor function. basically anything before it. it wont catch errors after it.


Promise.all([p1, p2, p3]).then(values => {
  console.log(values);
}); // all promises resolve at the time of the last promise. 
*/

import fetch from "node-fetch";

/* const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((resp) => resp.json());
  })
)
  .then((results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch(() => console.log("error")); */

/* ********Async/Await************/
/* 

then:
movePlayer(100, 'Left')
.then(() => movePlayer(400, 'Left'))
.then(() => movePlayer(10, 'Right'))
.then(() => movePlayer(330, 'Left'))

Now:
async function playerStart() {
  await movePlayer(100, 'Left'); // pause
  await movePlayer(400, 'Left'); // pause
  await movePlayer(10, 'Right'); // pause
  await movePlayer(330, 'Left'); // pause
}

Save result in a variable:
async function playerStart() {
  const firstMove = await movePlayer(100, 'Left'); // pause
  const secondMove = await movePlayer(400, 'Left'); // pause
  const thirdMove = await movePlayer(10, 'Right'); // pause
  const fourthMove = await movePlayer(330, 'Left'); // pause
}

//simple fetch request: 
async function fetchUsers() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();
  console.log(data);
}

fetchUsers();

//fetch all request with error handling:
*/
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

/* const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => fetch(url).then((resp) => resp.json()))
    );
    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
  } catch (error) {
    console.log("oops", error);
  } finally {
    console.log("extra");
  }
};

getData(); */

/* .finally will run nomatter what. it is a good place to put a loading spinner or notification or send email regardless of the outcome of the promise. */

/* 
a for of loop is a good way to loop over an array of promises. 
here is a for loop:
const loopThroughUrls = (url) => {
  for (url of urls) {
    console.log(url)
  }
*/
//here is a for of await loop:

const getData2 = async function () {
  const arrayOfPromises = urls.map((url) => fetch(url));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
};

getData2();
