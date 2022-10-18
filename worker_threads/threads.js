const { isMainThread, workerData, Worker } = require("worker_threads");

if (isMainThread) {
  console.log(`Main thread: ${process.pid}`);
  new Worker(__filename, { workerData: [1, 4, 5, 6, 8] });
  new Worker(__filename, { workerData: [4, 6, 7, 9, 10] });
} else {
  console.log(`Worker ${process.pid} started`);
  console.log(`sorted Worker data: ${workerData.sort()}`);
}

// a worker thread is used to improve the performance of a node application.  It is used to offload a task to a separate thread.  This is done by using the worker_threads module. The first argument is the path to the file that is used to create the worker thread.  The second argument is an object that contains the data that is used to create the worker thread.
