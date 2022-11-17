const db = require('../config/connection');
const { User } = require('../models/User');
const { Restaurant } = require('../models/Restaurant')

const userData = require('./userData.json');
const restaurantData = require('./restaurant.json')

db.once('open', async () => {
  await User.deleteMany({});
  await Restaurant.deleteMany({})

  const users = await User.insertMany(userData);
  const restaurants = await Restaurant.insertMany(restaurantData);

  console.log('Users seeded!');
  console.log('Restaurant seeded!');
  process.exit(0);
});