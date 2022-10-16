//node fs module lets us read and write files and interact with the file system or stream data.
const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse");

const planets = require("./planets.mongo");

const habitablePlanets = [];

//function to filter habitable planets
function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

function loadPlanetsData() {
  //create a emitter and read stream from the csv file
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "kepler_data.csv")
    )
      //pipe the stream (readable file) to the parser to create an array of objects.
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", async (data) => {
        if (isHabitablePlanet(data)) {
          //upsert is a mongoose method that allows you to insert a new document if it doesn't exist or update it if it does.
          /*  TODO: replace create with upsert
         await planets.create({
            keplerName: data.kepler_name,
          }); */
        }
      })
      .on("error", (err) => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        console.log(`${habitablePlanets.length} habitable planets found!`);
        resolve();
      });
  });
}

function getAllPlanets() {
  return habitablePlanets;
}

module.exports = {
  loadPlanetsData,
  getAllPlanets,
};
