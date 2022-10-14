const express = require("express");
const cluster = require("cluster");
const os = require("os");

const app = express();

function delay(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) {
    // event loop is blocked...
  }
}

app.get("/", (req, res) => {
  //JSON.stringify({ hello: "world" });
  //takes in a JSON object and returns the string representation of that object
  //this blocks the event loop for a few milliseconds.
  //sorting arrays also blocks the event loop
  //JSON.parse('{"hello":"world"}');
  //takes a string and returns the JSON object
  res.send(`performance example: ${process.pid}`);
});

app.get("/timer", (req, res) => {
  delay(5000);
  res.send(`times up! ${process.pid}`);
});

console.log(`running server.js...`);
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  // Fork workers. the timer will not prevent the server from accepting new requests.
  cluster.fork();
  cluster.fork();
  //with two forks the server can handle two requests at a time, but any more will be blocked again. to automate this we can use the os module. this checks the number of cores on the machine and forks that many workers.
  /* 
  const NUM_WORKERS = os.cpus().length;
  for (let i = 0; i < NUM_WORKERS; i++) {
    cluster.fork();
  }
  */
} else {
  console.log(`Worker ${process.pid} started`);
  app.listen(3000, () => {
    console.log("server listening on port 3000");
  });
}

//the event loop is blocked for 5 seconds, so no other requests can be handled during that time. the entire server is blocked.

//password hash functions are also blocking. This can be a problem if you have a lot of users and you need to hash their passwords. You can use the crypto module to hash passwords asynchronously.

//response time is not a good way to measure performance. It is a good way to measure the response time of a single request, but it is not a good way to measure the performance of the server.

//response time should be measured using a load testing tool and kept below 100ms.

//load testing tools: artillery, autocannon, k6, loader.io, loadimpact, locust, siege, tsung, wrk.

//artillery is a good tool for load testing. It is easy to use and has a lot of features. It is also free and open source.

//artillery is a command line tool. It is installed globally using npm. It is used to run load tests against a server.

//One way to improve node performance is to use a load balancer. A load balancer is a server that sits in front of a group of servers and distributes incoming requests across the group of servers. This is called load balancing.

//the node cluster module is built in and provides a fork function to create a new worker processes and a isMaster property to check if the current process is the master process.

//the cluster module is used to create a master process and worker processes. The master process is responsible for creating worker processes and distributing incoming requests across the worker processes. The worker processes are responsible for handling the requests.

//node clustering uses the rounde robin algorithm. it is used to distribute incoming requests across the worker processes. The master process keeps track of the number of requests each worker process has handled and distributes the next request to the worker process with the least number of requests.

//the cluster module is not a load balancer. It is a tool for creating worker processes. It is up to you to create a load balancer using the cluster module.

//horizontal scaling is the process of adding more servers to a system to increase performance. This is called scaling out.

//vertical scaling is the process of adding more resources to a single server to increase performance. This is called scaling up.

//the PM2 module is a process manager built on the node cluster. It is used to manage node processes. It is used to start, stop, restart, and monitor node processes. It is also used to automatically restart node processes when they crash.
