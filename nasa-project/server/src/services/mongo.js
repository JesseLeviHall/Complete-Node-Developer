const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://nasa-api:3EZYIJZUxkbZE2fe@nasacluster.5cg5ecw.mongodb.net/?retryWrites=true&w=majority";

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
