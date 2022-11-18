const { User, Restaurant } = require('../models');

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
    restaurant: async (parent, {_id}) => {
      const params = _id ? { _id } : {};
      return Restaurant.find(params)
    },
    userCollection: async (parent, {_id}) => {
      const params = _id ? { _id } : {};
      return User.find(params)
    },
  },
  Mutation: {
    addRestaurant: async (parent, args) => {
      const restaurant = await Restaurant.create(args);
      return restaurant;
    },
  },
};

module.exports = resolvers;