const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.routes");
const messagesRouter = require("./routes/messages.routes");

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  console.log(`Response time: ${Date.now() - start} ms`);
  console.log(`Request: ${req.baseUrl} ${req.url} Method: ${req.method}`);
});

app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", {
    title: "My Friends Are VERY Clever",
    caption: "Let's go skiing!",
  });
});

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
