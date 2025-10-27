const errorHandler = (controller) => {
  return async function (req, res, next) {
        try {
            await controller(req, res, next);
        } catch (err) {
            res.json({result : false, error : err})
        }
    }
}

module.exports = { errorHandler };