//the require function is used to import and execute modules, such as the fs module, http module, and path module, events module, etc. we usually assign the imported module to a variable. for example, we can assign the fs module to a variable named fs, and then use the fs variable to access the fs module.

//we can utilize the require function to import our own modules. for example, we can create a module named mymodule.js, and then import the module using the require function. or to import a pre-built module.

//node modules are good for Reusing code, organizing code, exposing only what will be used and so on.

//tls means transport layer security and it is used for secure communication over a computer network. it is a standard security technology for establishing an encrypted link between a server and a client. this link ensures that all data passed between the server and clients remain private and integral.

//commonJS modules became the standard in node and mongoDB.
//es6 modules are the standard in the browser. ESM for short.
//node 13 began to support esm modules.

//module caching is a feature of node that allows us to import a module only once, and then cache it for future use. this means that if we import a module twice, the module will only be executed once. this is useful because it allows us to import a module multiple times without worrying about performance.  we can see it by console.log(require.cache) in the terminal.
