const ErrorResponse = require('../utilis/errorResponse');
const errorHandler = (err, req, res, next) => {
    let error = { ...err };

    error.message = err.message;

    if (err.name === 'CastError') {
        const message = `Bootcamp not found with the id of ${err.value}`;
        error = new ErrorResponse(message, 404);
    }

    if (err.code === 11000) {
        const msg = 'Duplicate field value entered';
        error = new ErrorResponse(msg, 404);
    }

    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message);
        console.log(message);
        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 5000).json({ success: false, error: error.message || 'Server Error' });
}

module.exports = errorHandler;