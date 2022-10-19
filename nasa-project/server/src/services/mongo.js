const mongoose = require("mongoose");

const MONGO_URL = "";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready");
});

mongoose.connection.on("error", (err) => {
  console.log("MongoDB connection error", err);
});

async function mongoConnect() {
  mongoose.connect(
    "mongodb+srv://nasa-api:3EZYIJZUxkbZE2fe@nasacluster.5cg5ecw.mongodb.net/?retryWrites=true&w=majority"
  );
}

module.exports = {
  mongoConnect,
};
