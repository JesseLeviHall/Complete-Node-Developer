//route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.

// The route parameters are specified using a colon (:) prefix followed by the name of the route parameter as in the following example:

// app.get('/users/:userId/books/:bookId', function (req, res) {})

// The captured values of route parameters are always strings. If the need arises, they can be converted to numbers by using the built-in JavaScript function Number(). For example, the following code converts the captured value of the route parameter :userId to a number: const userId = Number(req.params.userId);

//middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

//in express the order of middleware is important. If you want to use a middleware function in an application, you must load the middleware function into the request-processing pipeline. The following code loads a middleware function into a chain of middleware functions:

//app.use(function, function, function,( req, res, next){})

//app.use(myMiddleware);

//the following code loads a middleware function into a chain of middleware functions at a path for GET requests to the root of the app: app.get('/', myMiddleware);

//REST API is an architectural style for building distributed systems based on hypermedia. REST is independent of any underlying protocol and is not necessarily tied to HTTP. For this reason, when people refer to REST APIs, they are usually referring to REST APIs that use HTTP.

//REST stands for Representational State Transfer. To be a RESTful API, an application must: Use HTTP response codes to indicate API status and errors. Use HTTP verbs (GET, POST, PUT, DELETE) to operate on the collections and elements. Use standard HTTP authentication and authorization. Return JSON-encoded responses. Use HATEOAS (Hypermedia as the Engine of Application State).

//really only makes sense when you have a client and server.

//CRUD stands for Create, Read, Update, and Delete. These are the four basic functions of persistent storage. Any information that is “storable” can be managed using CRUD. In a RESTful API, CRUD corresponds to the HTTP methods POST, GET, PUT, and DELETE, respectively.

//mvc architecture is different than mvp and mvvm. mvc is a software design pattern that separates an application into three main logical components: the model, the view, and the controller. Each of these components are built to handle specific development aspects of an application.

//the model is the data, the view is the user interface, and the controller is the application logic. the model and view never communicate with each other directly. the controller mediates the interaction between the model and the view. the controller receives user input and converts it to commands for the model or view.

//microservices are a software development technique—a variant of the service-oriented architecture (SOA) architectural style that structures an application as a collection of loosely coupled services. In a microservices architecture, services are fine-grained and the protocols are lightweight.
