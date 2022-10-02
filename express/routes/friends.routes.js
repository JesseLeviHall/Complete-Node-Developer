const express = require("express");

const friendsController = require("../controllers/friends.controller");

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log("Friends router middleware");
  console.log("ip address:", req.ip);
  next();
});

//endpoint for /friends
friendsRouter.post("/", friendsController.postFriends);
friendsRouter.get("/", friendsController.getFriends);
friendsRouter.get("/:friendId", friendsController.getFriend);

module.exports = friendsRouter;
