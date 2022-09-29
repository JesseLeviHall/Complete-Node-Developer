const { parse } = require("csv-parse");
//node fs module lets us read and write files and interact with the file system or stream data.
const { createReadStream } = require("fs");

const results = [];

//create a emitter and read stream from the csv file
const stream = createReadStream("kepler_data.csv").on("data", (data) => {
  results.push(data);
});
