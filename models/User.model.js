const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

///movie Information
const movieSchema = new Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    Actors: {
      type: String,
    },
    Image:
    {
        data: Buffer,
        contentType: String
    }
  })


const User = model("User", userSchema);
const movie = model("movie", userSchema);
module.exports = {User, movie}
