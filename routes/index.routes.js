const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  
  
  res.render("index", { user: req.session.currentUser });
});



module.exports = router;
