const express = require("express");

const app = express();

function delay(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) {
    // event loop is blocked...
  }
}

app.get("/", (req, res) => {
  res.send("performance example");
});

app.get("/timer", (req, res) => {
  delay(5000);
  res.send("ding ding times up");
});
