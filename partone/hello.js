/* const mission = process.argv[2];
//passing the value of mission from the command line using hte argv array in the process object.
if (mission === "learn") {
  console.log("Learning node.js");
} else if (mission === "teach") {
  console.log("Teaching node.js");
}

setTimeout(() => {
  console.log("the rabbit finnished the race"), 1000;
});

console.log("the turtle finished the race"); */

//********************************************** */
//example event emitter:
const EventEmitter = require("events");

//subject:
const influencer = new EventEmitter("they did something");

//an observer follows the influencer by calling the .on
influencer.on("they did something", () => {
  console.log("the follower is amazed!");
});

//another observer follows the influencer :
influencer.on("they did something", () => {
  console.log("follower 2 does not like it!");
});

//the influencer does something by calling the .emit with the name of the event passed in as a string:
influencer.emit("they did something");

//emitter only if result is true:
influencer.on("they did something", (result) => {
  if (result) {
    console.log("the condition was met for third follower!");
  }
});

//the process object is an instance of EventEmitter
process.on("exit", (code) => {
  console.log("Process exit event with code", code);
});

//this will call the conditional observer:
influencer.emit("they did something", true);
