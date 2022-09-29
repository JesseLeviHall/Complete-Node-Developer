const axios = require("axios");

axios
  .get("https://www.google.com")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .then(() => {
    // always executed
    console.log("All Done");
  });
