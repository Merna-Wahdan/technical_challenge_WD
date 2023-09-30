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
      res.json(JSON.parse(data));
    }
  );
});

//GET PHONE BY ID
router.get("/phones/:id", (req, res, next) => {
  const { id } = req.params;
  let phone;
  const phones = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data/phones.json"), "utf8")
  );
  phones.forEach((e) => {
    if (e.id.toString() === id) {
      phone = e;
    }
  });
  if (phone) {
    res.json(phone);
  } else {
    res.send(404);
  }
});

module.exports = router;
