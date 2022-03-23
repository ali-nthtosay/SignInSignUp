const movie = require("../models/movie.model"); // the movie will be used to create new drones in our DB


// const userAddedMovie = [
//   {  },
// ];

const mongoose = require("mongoose");
const allMoviesList = require("../public/js/allMovies");
const updatedMoviesList =  []
allMoviesList.forEach((item) =>{
  let film = {};
  film.Title = item.Title;
  film.Actors= item.Actors;
  film.Image = item.Images[0]
  updatedMoviesList.push(film)
})

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/MyDB";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    // DB connection is established.
    // using .create() method we add the drones array to the DB
    movie.create(updatedMoviesList)
      .then((data) => {
        console.log(data.length, " movie created!");
        
        mongoose.connection
          .close()
          .then(() => console.log("Database closed"))
          .catch((err) => console.log("Error closing DB: ", err));
      })
      .catch((err) => console.log('Error seeding the DB: ', err));
  })
  .catch((err) => {
    console.log("Error connecting to mongo: ", err);
  });