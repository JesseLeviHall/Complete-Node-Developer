const http = require("http");
const mongoose = require("mongoose");
const process = require("process");

const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready");
});

mongoose.connection.on("error", (err) => {
  console.log("MongoDB connection error", err);
});

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    await loadPlanetsData();
  } catch (error) {
    console.log(error);
  }

  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
