const express = require("express");
const app = express();

function delay(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) {
    // event loop is blocked...
  }
}

app.get("/", (req, res) => {
  res.send(`performance example: ${process.pid}`);
});

app.get("/timer", (req, res) => {
  delay(5000);
  res.send(`times up! ${process.pid}`);
});

console.log(`running server.js...`);
app.listen(3000, () => {
  console.log("server listening on port 3000");
});
