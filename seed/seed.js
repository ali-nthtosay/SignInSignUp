const movie = require("../models/movie.model"); // the DroneModel will be used to create new drones in our DB


const userAddedMovie = [
  {  },
];

)
const mongoose = require("mongoose");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    // DB connection is established.
    // using .create() method we add the drones array to the DB
    movie.create(newMovie)
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