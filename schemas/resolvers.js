const { User, Restaurant } = require('../models');

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
    restaurant: async (parent, {restaurantId}) => {
      // const params = _id ? { _id } : {};
      return Restaurant.findOne({_id: restaurantId})
      
    },
    // userCollection: async (parent, {_id}) => {
    //   const params = _id ? { _id } : {};
    //   return Restaurant.find(params)
    // },
  },
  Mutation: {
    addToUserCollection: async (parent, { userId, restaurantId }) => {
      return await User.findOneAndUpdate(
        {_id: userId},
        {
          $addToSet: { favoritesRestaurant: restaurantId }
        },
        {
          new: true,
          runValidators: true,
        }
      )
    },
    addRestaurant: async (parent, args) => {
      return Restaurant.create(args);
    },
  },
};

module.exports = resolvers;