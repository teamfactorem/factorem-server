var express = require('express');
var router = express.Router();
router.use(express.urlencoded({ extended: true}));

router.post('/', function(req, res) {
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  let name, email, material, technology, fileurl, quantity, remarks, finishing, tolerance, company, expectedPrice, delivery, expectedDelivery, application;
  name = req.body.name;
  email = req.body.email;
  material = req.body.material;
  technology = req.body.technology;
  fileurl = req.body.fileurl;
  quantity = parseInt(req.body.quantity);
  remarks = req.body.remarks;
  finishing = req.body.finishing;
  tolerance = req.body.tolerance;
  company = req.body.company;
  expectedPrice = req.body.expectedPrice;
  delivery = req.body.delivery;
  expectedDelivery = req.body.expectedDelivery;
  application = req.body.application;

  var query =
    "INSERT INTO Orders (name, email, material, technology, fileurl, quantity, remarks, finishing, tolerance, company, expectedPrice, delivery, expectedDelivery, application) VALUES ("
    + "'" + name + "'" + ", "
    + "'" + email + "'" + ", "
    + "'" + material + "'" + ", "
    + "'" + technology + "'" + ", "
    + "'" + fileurl + "'" + ", "
    + "'" + quantity + "'" + ", "
    + "'" + remarks + "'" + ", "
    + "'" + finishing + "'" + ", "
    + "'" + tolerance + "'" + ", "
    + "'" + company + "'" + ", "
    + "'" + expectedPrice + "'" + ", "
    + "'" + delivery + "'" + ", "
    + "'" + expectedDelivery + "'" + ","
    + "'" + application + "'" + ")"
  ;
  try {
    if (!name || !email || !quantity) {
      return res.json({
        success: false,
        message: "Please try again"
      })
    } else {
      db.query(query, function (err, result) {
        if (err) {
          return res.json({
            success: false,
            message: "Please try again"
          })
        } else {
          // const Telegraf = require('telegraf');
          // const bot = new Telegraf(process.env.BOT_TOKEN);
          // bot.startPolling();
          // bot.telegram.sendMessage(process.env.CHAT_ID, 'A file has been uploaded by ' + name + '. Check the database!!').catch(console.error);
          return res.json({
            success: true,
            message: "worked"
          })
        }
      })
    }
  } catch (err) {
    return res.json({
      success: false,
      message: "Please try again"
    })
  }
});

module.exports = router;
