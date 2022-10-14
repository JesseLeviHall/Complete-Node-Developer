const { isMainThread, workerData, Worker } = require("worker_threads");

if (isMainThread) {
  console.log(`Main thread: ${process.pid}`);
  new Worker(__filename, { workerData: [1, 4, 5, 6, 8] });
  new Worker(__filename, { workerData: [4, 6, 7, 9, 10] });
} else {
  console.log(`Worker ${process.pid} started`);
  console.log(`sorted Worker data: ${workerData.sort()}`);
}
