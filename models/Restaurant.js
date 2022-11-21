const { Schema, model } = require('mongoose')

const restaurantSchema = new Schema({
    
    name: {
        type: String,
        required: true,
    },
    image_url: {
        type: String,
    },
    display_phone: {
        type: String,
    },
    categories: {
        type: String,
    },
    location: {
        type: String,
    },
});

const Restaurant = model('Restaurant', restaurantSchema);

module.exports = Restaurant;