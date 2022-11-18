const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    favoritesRestaurant:[Restaurant]
  }

  type Restaurant {
    _id: ID!
    restaurantId: String!
    name: String!
    image_url: String
    display_phone: String
    categories: String
    location: String
    is_closed: Boolean!
  }

  type Query { 
    user: [User]
    restaurant(restaurantId: String): [Restaurant]
    userCollection(_id: String): [Restaurant]
  }

  type Mutation { 
    addRestaurant(restaurantId: String!, name: String!, image_url: String, display_phone: String, categories: String, location: String, is_closed: Boolean!) : Restaurant
  }
`;

module.exports = typeDefs;