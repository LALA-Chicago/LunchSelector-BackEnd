const { Schema, Types } = require('mongoose')

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
        type: Map,
        of: String
    },
    location: {
        type: Map,
    },
    hours: {
        type: Map,
    },
    is_open_now: {
        type: Boolean,
        required: true,
    }
});

const Restaurant = model('restaurant', restaurantSchema);

module.exports = Restaurant;