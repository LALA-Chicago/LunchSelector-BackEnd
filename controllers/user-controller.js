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
  },
  async addProfile({ body }, res) {
   const user = await User.create(body);

   if (!user) {
    return res.status(400).json({ message: 'Something is wrong!' })
   }
   const token = signToken(user);
   res.json({ token, user })
  },
  async login({ body }, res) {
    const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }]});
    const correctPw = await user.isCorrectPassword(body.password);

    if (!user || !correctPw) {
      return res.status(400).json({ message: 'Wrong user or password, please try again' });
    }

    const token = signToken(user);
    res.json({ token, user })
  }
}