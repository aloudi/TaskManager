const errorHandler = (res, err) => res.status(400).send(err);
module.exports = errorHandler;
