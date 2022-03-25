const router = require("express").Router();
const movie = require('../models/User.model');
/* GET home page */
router.get("/", (req, res, next) => {
  console.log(req.session);
  console.log("Current user:", req.session.currentUser);
  res.render("index", { user: req.session.currentUser });
});

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


module.exports = router;
