module.exports = () => {
    const TaskService = require("../services")();
  
    const Search = async (req, res, next) => {
      try {
        const payload = req.body;
        const response = await TaskService.search(payload);
        console.log(response)
        if (response=='error') {
          res.status(200).send({
            status: 400,
            message: response,
          });
         
        } else {
          res.status(200).send({
            status: 200,
            message: response[0],
          });
        }
      } catch (error) {
        next(error);
      }
    };
    const userPurchase = async (req, res, next) => {
      try {
        const payload = req.body;
        const response = await TaskService.userPurchase(payload);
        console.log(response)
        if (response == 'error') {
          res.status(200).send({
            status: 400,
            message: response,
          });
         
        } else {
          res.status(200).send({
            status: 200,
            message: response,
          });
        }
      } catch (error) {
        next(error);
      }
    };
    const topRestaurant = async (req, res, next) => {
      try {
        const payload = req.body;
        const response = await TaskService.topRestaurant(payload);
        console.log(response)
        if (response == 'error') {
          res.status(200).send({
            status: 400,
            message: response,
          });
         
        } else {
          res.status(200).send({
            status: 200,
            message: response,
          });
        }
      } catch (error) {
        next(error);
      }
    };
    const openRestaurant = async (req, res, next) => {
      try {
        const payload = req.body;
        const response = await TaskService.openRestaurant(payload);
        console.log(response)
        if (response == 'error') {
          res.status(200).send({
            status: 400,
            message: response,
          });
         
        } else {
          res.status(200).send({
            status: 200,
            message: response,
          });
        }
      } catch (error) {
        next(error);
      }
    };
    return {
      Search,
      userPurchase,
      topRestaurant,
      openRestaurant
    };
  };