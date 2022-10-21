const fs = require("fs");
const https = require("https");
const path = require("path");
const express = require("express");
const helmet = require("helmet");

const PORT = 3000;

const app = express();

app.use(helmet());

function checkLoggedIn(req, res, next) {
  const isLoggedIn = true; // this would be a database lookup in the real world
  if (!isLoggedIn) {
    return res.status(401).json({ error: "Not logged in" });
  }
  next();
}

app.get("/auth", (req, res) => {
  res.json({ message: "You are logged in" });
});

app.get("/auth/logout", (req, res) => {
  res.json({ message: "You are logged out" });
});

app.get("/secret", checkLoggedIn, (req, res) => {
  return res.send("This is a secret");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

https
  .createServer(
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app
  )
  .listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
