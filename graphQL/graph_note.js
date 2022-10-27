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
*/
