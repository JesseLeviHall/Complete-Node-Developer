const { send, read } = require("./internals/request");

function makeRequest(url, data) {
  send(url, data); //we can use the send function from the request.js file here.
  return read();
}

const responseData = makeRequest("https://www.google.com", "HELLOO");

console.log(responseData);
