const http = require("http");

const app = require("./app");

const planetsModel = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
