/* 
the five main data base models are: 
1. relational
    moslty used for structured data and SQL and tables
2. document
    mostly used for unstructured data and NoSQL
    rather than rows and columns, documents are stored as documents. 
3. key-value
  redis is an example of a key-value database
4. graph
  neo4j is an example of a graph database. good for data that has relationships, like social networks
5. wide-column
  amazon apache is an example of a wide-column database.  good for data that has a lot of columns, like sensor data. 


  a database is a system of hardware and software that allows a user to organize, store, and use data. 

  SQL is a language for interacting with relational databases.
  a query is a structured request for data from a database. like a question you ask a database.

  SQL is declarative.  you tell the database what you want, not how to get it. declarative languages are easier to read and write. limited to what the language allows you to do.
  sql means structured enlish query language. 

  imperative languages are procedural.  you tell the database how to get the data.  imperative languages are harder to read and write. You have to tell the database how to get the data. way more options for creating custom queries.

  A table has a name, and represents an object. The table has columns and rows.  The columns are the properties of the object. like the key.  The rows are the instances of the object, one single peice of data. 

  The column names are the called the degree of the table or the domain or constraint.   The rows are called the cardinality of the table or the attribute or the field.

  the column defines the type of the data that can be stored in that column.  the type of data that can be stored in a column is called the domain.  the domain is the set of all possible values for that column.

  rows are called tuples.  a tuple is a set of values that are related to each other.  a tuple is a single row of data.  a tuple is a single record.  a tuple is a single instance of a table.  a tuple is a single instance of an object. multiple rows are called the cardinality of the table.  the cardinality is the number of rows in a table.

  the primary key usually is the id column. the foreign key references the primary key of a different table that will allow a relationship to be created between the two tables.

  One benefit of relational db is the referential integrity. referential integrity is checked automatically by sql, it wont let you update or delete a row that references another table that doesnt exist or the link is broken.  for referential integrity to hold, any foreign key must be valid. 

  auto increment is built into mySQL and not mongodb. 
*/
