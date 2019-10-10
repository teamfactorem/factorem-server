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
  quantity = parseInt(req.body.quantity);
  remarks = req.body.remarks;

  var query =
    "INSERT INTO Orders (name, email, material, technology, fileurl, quantity, remarks) VALUES ("
    + "'" + name + "'" + ", "
    + "'" + email + "'" + ", "
    + "'" + material + "'" + ", "
    + "'" + technology + "'" + ", "
    + "'" + fileurl + "'" + ", "
    + "'" + quantity + "'" + ", "
    + "'" + remarks + "'" + ")";
  try {
    db.query(query, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send('Success');
      }
    })
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
