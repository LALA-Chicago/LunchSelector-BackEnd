const { User, Restaurant } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
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
    addProfile: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
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
    addProfile: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;