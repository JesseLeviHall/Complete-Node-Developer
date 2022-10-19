const http = require("http");
const process = require("process");
const app = require("./app");
const { mongoConnect } = require("./services/mongo");

const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  try {
    await mongoConnect();
    await loadPlanetsData();
  } catch (error) {
    console.log(error);
  }

  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
