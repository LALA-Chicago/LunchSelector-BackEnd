const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Restaurant {
    _id: ID!
    name: String!
    url: String
    display_phone: String
    categories: Array
    location: Array
    hours: Array
    open_is_now: Array
  }

  type Query { 
    user: [User]
    restaurant(_id: String): [Restaurant]
    userCollection(_id: String): [Restaurant]
  }

  type Mutation { 
    addRestaurant(name: String!, url: String, display_phone: String, categories: Array, location: Array, hours: Array, is_open_now: Boolean!) : Restaurant
  }
`;

module.exports = typeDefs;