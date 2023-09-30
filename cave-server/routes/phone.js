const router = require("express").Router();
const fs = require("fs");
var path = require("path");

//GET ALL PHONES
router.get("/phones", (req, res, next) => {
  let obj;
  fs.readFile(
    path.join(__dirname, "../data/phones.json"),
    "utf8",
    function (err, data) {
      if (err) throw err;
      res.json(data);
    }
  );
});

module.exports = router;
