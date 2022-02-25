const { Schema, model } = require("mongoose");
// require Thought.js file?

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true, // change this to a custom message later?
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true, // change this to a custom message later?
      match: /.+\@.+\..+/,
    },
    /* Array of _id values referencing the Thought model */
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      /* Array of _id values referencing the User model (self-reference) */
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Schema Settings
// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;
