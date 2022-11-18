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
    categories: Map
    location: Map
    hours: Map
    open_is_now: Boolean!
  }

  type Query { 
    user: [User]
    restaurant(_id: String): [Restaurant]
  }

  type Mutation { 
    addRestaurant(name: String!, url: String, display_phone: Number, categories: Map, location: Map, hours: Map, is_open_now: Boolean!) : Restaurant
  }
`;

module.exports = typeDefs;