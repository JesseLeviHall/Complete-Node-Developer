// libuv is a cross-platform asynchronous I/O library based on the event loop. Node and libuv are tightly coupled. Node is built on top of libuv. Node is a wrapper around libuv, written in C++.  It is what makes asnyc code call stack and event loop work ouside of the browser.

// single threaded event loop means that
// 1. only one thing can happen at a time
// 2. the event loop is always running
// 3. the event loop is always listening for new events

//run node without any arguments to start the REPL
//REPL is a read-eval-print loop. It is a command line interface that allows you to run JavaScript code and see the results immediately. It is a great way to test out JavaScript code and see what it does.

//the browser has the window object, node has the global object. The global object is the root object in node. It is the default object in node. It is the object that is available in all modules.

//html stands for hyper text markup language.
//http stands for hyper text transfer protocol. information is transferred in the form of packets. either as JSON or XML or plain text.
//JSON stands for JavaScript Object Notation, XML stands for extensible markup language.

//JSON.stringify() is a blocking function that converts a JavaScript object into a JSON string.
//Most code in node involves some form of async I/O. The event loop is what makes node.js non-blocking. The event loop is what makes node.js scalable.

//while the program is working no one task but moves on to another one and then comes back to the first one when it is done. This is called non-blocking I/O. (asynchronous I/O).

//JavaScript is single threaded. It can only do one thing at a time. It can only execute one line of code at a time. It can only execute one function at a time. It can only execute one event at a time. But we can make it do more than one thing at a time by using the libuv event loop and asynchronous I/O.

//The libuv system is multithreaded which handles the thread pool for node. There are 4 threads. if we make all 4 threads busy, the event loop will wait for one of the threads to finish before it can move on to the next task. Node avoids using the threadpool opting for the operating system's asynchronous I/O functions instead. Usually the operating system's asynchronous I/O functions are faster than the threadpool and better for network I/O. The threadpool is better for CPU intensive tasks.

//the callback queue is first in first out (FIFO).

//the event loop is a loop that checks the call stack and the callback queue. If the call stack is empty, it will take the first thing in the callback queue and put it on the call stack. If the call stack is not empty, it will keep checking the call stack and the callback queue until the call stack is empty. Then it will take the first thing in the callback queue and put it on the call stack. It will keep doing this until the callback queue is empty.

//the job queue is different from the callback queue, it is reserved only for promises. The job queue is first in first out (FIFO). These `thenable` methods are added to Job Queue once the promise has returned/resolved, and then gets executed.

//the event loop goes through the job queue to resolve promises before it goes through the callback queue.

//there are four phases on the event loop: timers, I/O (input/output events) callbacks or poll, setImmediate, and close callbacks.

/* setTimeout (executes once), setInterval (loops a function at an interval), setImmediate(execute the callback you pass in as soon as possible on the event loop. It comes immediatly after any I/O operations have finished and before another cycle of the event loop. )  */

//the cycle of the event loop is a tick. process.nextTick() can be useful.

//being event driven means It is always listening for new events to be added to the callback queue and job queue and call stack.

//the observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.

//the observer pattern in node is event driven architecture. The event loop is the observer. The callback queue is the subject.

/* import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event'); */

//browsers have threads for each tab.  They have something called web workers or worker threads. they work in the background, we an make a new worker (thread) in the window object by using const worker = new Worker('worker.js')

//concurrency is when two or more tasks can start, run, and complete in overlapping time periods. It doesn't necessarily mean they'll ever both be running at the same instant. It means that they are capable of running simultaneously.

//parallelism is when tasks literally run at the same time, e.g., on multi-core processors. It is when tasks literally run at the same time, e.g., on multi-core processors.

//in node we can make a new thread by using the worker_threads module. const { Worker } = require('worker_threads');

//the worker_threads module is experimental. It is not recommended for production use. It is not a stable API. Backwards incompatible changes may be made to it at any time.

//const { spawn } = require('child_process');
//spawn('get', ['https://www.google.com'], { stdio: 'inherit' });
//spawn is a function that takes two arguments, the first is the path to the file we want to run, the second is an array of arguments we want to pass to the file we want to run.

//layered Architecture organizes apps into three parts typically. The presentation layer, the business logic layer, and the data access layer. In MVC the presentation layer is the view, the business logic layer is the controller, and the data access layer is the model.
//this is the design principle of separation of concerns
