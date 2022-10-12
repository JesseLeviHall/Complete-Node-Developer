//maps are a data structure that allows you to store key value pairs in a specific order.
const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  destination: "Kepler-442 b",
  customers: ["NASA", "ZTM"],
  upcoming: true,
  success: true,
};

//the set method allows you to add a new key value pair to the map:
launches.set(launch.flightNumber, launch);

//this is a data layer function that returns all the launches in the map: it allows us to keep the data layer separate from the business logic layer.
function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    launch.flightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customers: ["Zero To Mastery", "NASA"],
      flightNumber: latestFlightNumber,
    })
  );
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
};
