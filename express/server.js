const express = require("express");

const friendsController = require("./controllers/friends.controller");
const messagesController = require("./controllers/messages.controller");

const app = express();

const PORT = 3000;

app.get("/friends", friendsController.getFriends);

app.use((req, res, next) => {
  const start = Date.now();
  next();
  console.log(`Response time: ${Date.now() - start} ms`);
  console.log(`Request IP: ${req.baseUrl} ${req.url} Method: ${req.method}`);
});

app.use(express.json());

app.post("/friends", friendsController.postFriends);
app.get("/friends/:friendId", friendsController.getFriend);
app.get("/messages", messagesController.getMessages);
app.post("/messages", messagesController.postMessages);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
