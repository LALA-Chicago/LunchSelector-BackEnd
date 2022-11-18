const { Schema, model } = require('mongoose')

const restaurantSchema = new Schema({
    restaurantId: {
        type: String,
        required: true,
    },
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
    is_closed: {
        type: Boolean,
        // required: true,
    }
});

const Restaurant = model('Restaurant', restaurantSchema);

module.exports = Restaurant;