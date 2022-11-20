const { User } = require('../models');
const { signToken } = require('../utils');

module.exports = {
  async getUser({ user = null, params }, res) {
    const foundUser = await User.findOne({
      $or: [{ _id: user ? user.id : params.id },{ username:params.username }],
    });

    if (!foundUser) {
      return res.status(400).json({ message: 'Cannot find a user with this id!' });
    }

    res.json(foundUser);
  }
}