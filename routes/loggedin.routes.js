const router = require("express").Router();
const { requireLogin } = require("../middlewares/route-guard");
const allMoviesList = require("../public/js/allMovies");


router.use(requireLogin);
// const renderProfilePage = (req, res) => {
//   res.render("profile", { user: req.session.currentUser });
// };
// router.get("/profile", renderProfilePage);
//get all movies information
router.get('/profile', (req,res) =>{
  // movie.find({}, (err,data) => {
  //   if(!err){
  //     
  //   } else{
  //     console.log(err)
  //   }
  // })
  res.render("profile", {allMoviesList});
});
const renderDetailsPage = (req, res) => {
  console.log(req.myOwnCustomKey);
  res.send("this is another route we can only see when logged in");
};
router.get("/details", renderDetailsPage);

module.exports = router;

// /profile [session, logger, favicon, staticdirectory, cookieParser, formParser, requireLogin, renderProfilePage, errorHandling]
// /details [session, ... ,  errorHandling]

// /details [requireLogin, renderDetailsPage]
