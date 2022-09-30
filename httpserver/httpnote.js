//post method is used to send data to the server to a collection of resources.
//put method is used to send data to the server to a specific resource.

//req is a readable stream. res is a writable stream. we can pipe the data from req to res to send it back to the client, and process it in the meantime, saving it to a database, for example.

//each url is an enc point, every time a request is made to the server, the callback function is called.

//a parameterized endpoint is an endpoint that has a variable in it. the variable is a parameter.

//a web origin is a combination of a protocol, a domain name, and a port number.

//same origin policy is a policy that prevents a web page from calling a script from a different origin. a browser will not allow a script from one origin to access a resource from a different origin but a post request can be made to a different origin.

//cors is a set of rules that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.

//cors relaxes the same origin policy. it allows a web page to make a request to a different origin.

//access control allow origin is a header that is sent with a response to a request. it tells the browser that the response is allowed to be accessed by the requesting domain.

//side note, learn to test routes with vscode rest client extension.
