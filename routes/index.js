const router = require("express-promise-router")();
const TaskController = require("../controllers")();
router
  .route("/search")
  .post((req, res, next) => TaskController.Search(req, res, next));
router
  .route("/userpurchase")
  .post((req, res, next) => TaskController.userPurchase(req, res, next));

module.exports = router;