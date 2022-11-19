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
    // userCollection: async (parent, {_id}) => {
    //   const params = _id ? { _id } : {};
    //   return User.find(params)
    // },
  },
  Mutation: {
    addToUserCollection: async (parent, { userId, restaurantId }) => {
      return User.findOneAndUpdate(
        {_id: userId},
        {
          $addToSet: { favoritesRestaurant: { restaurantId } }
        },
        {
          new: true,
        }
      )
    },
    addRestaurant: async (parent, args) => {
      return Restaurant.create(args);
    },
  },
};

module.exports = resolvers;