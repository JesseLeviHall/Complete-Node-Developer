const { parse } = require("csv-parse");
//node fs module lets us read and write files and interact with the file system or stream data.
const { createReadStream } = require("fs");

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

//create a emitter and read stream from the csv file
const stream = createReadStream("kepler_data.csv")
  //pipe the stream (readable file) to the parser to create an array of objects.
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    if (isHabitablePlanet(data)) {
      habitablePlanets.push(data);
    }
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    console.log(habitablePlanets.map((planet) => planet["kepler_name"]));
    console.log(`${habitablePlanets.length} habitable planets found!`);
    console.log("done");
  });

module.exports = {
  planets: habitablePlanets,
};
