const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    favoritesRestaurant: [Restaurant]
  }

  type Restaurant {
    _id: ID!
    name: String!
    image_url: String
    display_phone: String
    categories: String
    location: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query { 
    users: [User]
    restaurants: [Restaurant]
    user(username: String!): User
    restaurant(restaurantName: String!): Restaurant
    userCollection(name: String): User
  }

  type Mutation { 
    addProfile(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addRestaurant(name: String!, image_url: String, display_phone: String, categories: String, location: String): Restaurant
    addToUserCollection(restaurantName: String!, email: String!) : User
  }
`;

module.exports = typeDefs;