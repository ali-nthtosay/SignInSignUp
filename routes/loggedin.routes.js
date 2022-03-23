const router = require("express").Router();
const { requireLogin } = require("../middlewares/route-guard");
// const allMoviesList = require("../public/js/allMovies");
const addMovie = require("../models/movie.model");
// const allMoviesList = require("../public/js/allMovies");

router.use(requireLogin);

//get all movies information from public js allMovies
router.get('/profile',async (req,res) =>{
 let allMoviesList = await addMovie.find({});

  res.render("profile", {allMoviesList});
});

//add save new movie
router.get("/profile/create", (req,res) =>{
  res.render("create")
})
router.post('/profile/create', (req,res) =>{
  const createNewMovie = new addMovie({
    Title: req.body.Title,
    Actors: req.body.Actors,
    Image: req.body.Image
  });
  createNewMovie.save();
  res.redirect("/profile");
  // console.log(req.body)
})

/// edit

router.get("/profile/edit/:id", async (req, res, next) => {
  const id  = req.params.id;
  console.log("here is the id",id);
  let movieToEdit = await addMovie.findById(id); 
  console.log("movies found",movieToEdit)
  res.render("edit", {movieToEdit})               /// movie from movie.model.js
});

router.post("/profile/edit/:id",async (req, res, next) => {
  const id = req.params.id
  const {Title, Actors, Image } = req.body 
  await addMovie.findByIdAndUpdate(id, { Title,Actors , Image }, { new: true });
  res.redirect("/profile");
});

//delete movie
router.post("/profile/delete/:id", async (req,res) => {
  const id  = req.params.id;
  await addMovie.findByIdAndRemove(id);
  res.redirect("/profile");
})

module.exports = router;
