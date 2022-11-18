const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema(
  {
    // userId: {
    //   type: Types.ObjectId,
    //   default: new Types.ObjectId,
    // },
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: 'Email address is required',
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    collection: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Restaurant'
      }
    ]
  }
);

const User = model('user', userSchema);

module.exports = User;