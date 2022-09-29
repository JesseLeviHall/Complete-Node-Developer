const promiseOne = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000);
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

Promise.all([promiseOne, promiseTwo])
  .then((data) => console.log(data))
  .catch((error) => console.log("something faild", error));

//output: error.  promise.all will reject if any of the promises are rejected.

//allSettled will not reject if any of the promises are rejected.  It will return an array of objects with the status and value of each promise.

Promise.allSettled([promiseOne, promiseTwo])
  .then((data) => console.log(data))
  .catch((error) => console.log("something faild", error));
