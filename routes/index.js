const router = require("express-promise-router")();
const TaskController = require("../controllers")();
router
  .route("/userpurchase")
  .post((req, res, next) => TaskController.userPurchase(req, res, next));
router
  .route("/search")
  .post((req, res, next) => TaskController.Search(req, res, next));
router
  .route("/toprestaurant")
  .post((req, res, next) => TaskController.topRestaurant(req, res, next));
router
  .route("/openrestaurant")
  .post((req, res, next) => TaskController.openRestaurant(req, res, next));

module.exports = router;