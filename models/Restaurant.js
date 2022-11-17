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
        type: Number,
    },
    categories: {
        type: Map,
        of: String
    },
    location: {
        type: String,
    },
    is_open_now: {
        type: Boolean,
        required: true,
    }
});