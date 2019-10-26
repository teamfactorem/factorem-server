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
    if (!name || !email || !quantity) {
      res.status(400).send("Please try again.");
    } else {
      db.query(query, function (err, result) {
        if (err) {
          res.status(400).send("Please try again.");
        } else {
          const Telegraf = require('telegraf');
          const bot = new Telegraf(process.env.BOT_TOKEN);
          bot.startPolling();
          bot.telegram.sendMessage(process.env.CHAT_ID, 'A file has been uploaded by ' + name + '. Check the database!!').catch(console.error);
          res.status(200).send('Success');
        }
      })
    }
  } catch (err) {
    res.status(400).send("Please try again.");
  }
});

module.exports = router;
