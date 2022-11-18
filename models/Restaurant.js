const { Schema, model, Types } = require('mongoose')

const restaurantSchema = new Schema({
    restaurantId: {
        type: Types.ObjectId,
        default: new Types.ObjectId,
    },
    name: {
        type: String,
        required: true,
    },
    url: {
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
    hours: {
        type: String,
    },
    is_open_now: {
        type: Boolean,
        // required: true,
    }
});

const Restaurant = model('Restaurant', restaurantSchema);

module.exports = Restaurant;