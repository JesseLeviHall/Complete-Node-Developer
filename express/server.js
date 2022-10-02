const express = require("express");

const app = express();

const PORT = 3000;

const friends = [
  { id: 0, name: "John" },
  { id: 1, name: "Jane" },
  { id: 2, name: "Jim" },
];

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.use((req, res, next) => {
  const start = Date.now();
  next();
  console.log(`Response time: ${Date.now() - start} ms`);
  console.log(`Request IP: ${req.url} Method: ${req.method}`);
});

app.use(express.json());

app.post("/friends", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ msg: "Please include a name" });
  }
  const newFriend = { name: req.body.name, id: friends.length };
  friends.push(newFriend);
  res.json(newFriend);
});

app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({ error: "Friend not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
