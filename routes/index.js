const router = require("express-promise-router")();
const TaskController = require("../controllers")();
router
  .route("/search")
  .post((req, res, next) => TaskController.search(req, res, next));

module.exports = router;