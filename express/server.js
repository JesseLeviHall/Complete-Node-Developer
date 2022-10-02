const express = require("express");

const friendsRouter = require("./routes/friends.routes");
const messagesRouter = require("./routes/messages.routes");

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  console.log(`Response time: ${Date.now() - start} ms`);
  console.log(`Request: ${req.baseUrl} ${req.url} Method: ${req.method}`);
});

app.use(express.json());

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
