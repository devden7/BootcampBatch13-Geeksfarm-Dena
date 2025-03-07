const errorHandler = (error, req, res, next) => {
  console.error(error);
  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal Server Error';

  res.status(statusCode).json({
    message,
    statusCode,
    errors: error.errors,
  });
};

module.exports = errorHandler;
