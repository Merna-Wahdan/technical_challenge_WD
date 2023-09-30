const router = require("express").Router();

//GET ALL PHONES
router.get("/phones", (req, res, next) => {
  res.send("Hello!", 200);
});

module.exports = router;
