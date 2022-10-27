/* 
graphql is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. It is a specification for how clients can ask for information from a server. 

describe the schema:
type Project {
  name: String
  description: String
  contributors: [User]
}

then ask for information:
query {
  project(name: "GraphQL") {
    description
  }
}
searches for the project with the name "GraphQL" and returns the description.


GraphQL has one endpoint, and that endpoint is the entry point to your entire API. usually it is /graphql. and you make a post request to it.

A query usually has a name, and a set of parameters. The name is used to identify which part of the schema you want to access. The parameters are the arguments that are passed to that part of the schema.

you dont need to use the word query in the query. you can use mutation, or subscription.

a perfect use case is an e-commerce store. you can have a query that returns all the products, and a mutation that adds a product to the cart.

graph ql provides a solution to underfetching and overfetching. underfetching is when you make a request for a resource, but you dont get all the data you need. overfetching is when you make a request for a resource, and you get more data than you need. No filtering needed. 

graphql resolvers are functions that are responsible for populating the data for a single field in your schema. they can be used to fetch data from a database, or a REST API, or a microservice, or any other data source.
*/
