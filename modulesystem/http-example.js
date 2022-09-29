const http = require("https");

const req = http.request("https://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(chunk.toString());
  });
  res.on("end", () => {
    console.log("Response ended");
  });
});

req.end();

//a better way for the above is:

const { get } = require("https");

//we dont need the variable here, we can just use the get function directly.
const req2 = get("https://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(chunk.toString());
  });
  res.on("end", () => {
    console.log("Response ended");
  });
});
