const router = require("express").Router();
const movie = require('../models/User.model');
/* GET home page */
router.get("/", (req, res, next) => {
  
  
  res.render("index", { user: req.session.currentUser });
});

<<<<<<< HEAD
//get all movies information
router.get('/profile/movies-list', (req,res) =>{
  movie.find({}, (err,data) => {
    if(!err){
      res.send(data)
    } else{
      console.log(err)
    }
  })
})

//add movie to list
=======
>>>>>>> 2d83f490eeab983aa2d87e8ad29c62af6efd82bf


module.exports = router;
