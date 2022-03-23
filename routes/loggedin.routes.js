const router = require("express").Router();
const { requireLogin } = require("../middlewares/route-guard");
const allMoviesList = require("../public/js/allMovies");
const addMovie = require("../models/movie.model");

router.use(requireLogin);

//get all movies information from public js allMovies
router.get('/profile', (req,res) =>{
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

router.get("/profile/edit/:id", (req, res, next) => {
  const { id } = req.params 
  movie.findById(id);                /// movie from movie.model.js
});

router.post("/profile/edit/:id", (req, res, next) => {
  const { id } = req.params 
  const {Title, Actors, Image } = req.body 
  movie.findByIdAndUpdate(id, { Title,Actors , Image }, { new: true })
});

//delete movie
router.delete("/profile/delete/:id", (req,res) => {
  const { id } = req.params;
  movie.findByIdAndRemove(id);
})

module.exports = router;
