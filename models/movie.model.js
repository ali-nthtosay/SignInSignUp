const { Schema, model } = require("mongoose");


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
        type: String,
    }
  })



const movie = model("movie", movieSchema);
module.exports = { movie}