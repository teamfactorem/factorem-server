var express = require('express');
var router = express.Router();
router.use(express.urlencoded());

router.post('/', function(req, res) {
  let name, email, material, technology, fileurl, quantity, remarks;
  name = req.body.name;
  email = req.body.email;
  material = req.body.material;
  technology = req.body.technology;
  fileurl = req.body.fileurl;
  quantity = req.body.quantity;
  remarks = req.body.remarks;

  var query =
    "INSERT INTO forms (name, email, material, technology, fileurl, quantity, remarks) VALUES ("
    + "'" + name + "'" + ", "
    + "'" + email + "'" + ", "
    + "'" + material + "'" + ", "
    + "'" + technology + "'" + ", "
    + "'" + fileurl + "'" + ", "
    + "'" + quantity + "'" + ", "
    + "'" + remarks + "'" + ")";
  db.query(query, function (err, result) {
      if (err) throw err;
  })
  res.send("successfully submitted form");
});

module.exports = router;
