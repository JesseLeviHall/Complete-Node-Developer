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

rest apis are stateless so we can create clusters and scale more easily, named endpoints, and we can use caching. schemas and types are not required, but are required in graphql. graphql can speed up development. it does add complexity to the server. for small apps it may not be worth the effort to design all the schemas. it is difficult to cache. 

it is not uncommon to have an application with a rest api and a graphql api. there are some cases like authentication where the combo is the best solution. it is afterall just another endpoint. 

relay was created by facebook to help with the data fetching and state management of react apps. it is a framework that provides a set of tools to help you build react apps that can fetch data from a graphql server. it is not a requirement to use relay with graphql.

appolo is a graphql client that helps you manage data and state in your react app. it is a framework that provides a set of tools to help you build react apps that can fetch data from a graphql server. 

the reference implementation of graphql is written in javascript. there are other implementations in other languages.

graphql tools is a set of utilities for building graphql servers. it is a collection of packages that help you build a graphql server. executable schema for example is a package that helps you build a schema from type definitions and resolvers.

*/
