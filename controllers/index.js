module.exports = () => {
    const TaskService = require("../services")();
  
    const search = async (req, res, next) => {
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
  
    return {
      search,
    };
  };