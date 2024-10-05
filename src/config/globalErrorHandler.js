const globalErrorHandler = (err, req, res, next) => {
    console.error(err);
    const statusCode = err.statusCode || 500;
    const errMessage = err.message || "Internal Server Error"
    if (err.name === 'SequelizeValidationError') {
        const errors = err.errors.map(error => error.message);
        return res.status(400).json({
            status: 'fail',
            message: 'Validation Error',
            errors: errors,
        });
    }
    if (err.name === 'SequelizeDatabaseError') {
        return res.status(500).json({
            status: 'error',
            message: 'A database error occurred',
        });
    }
    res.status(statusCode).json({
        statusCode,
        status: statusCode >= 500 ? 'error' : 'fail',
        message: errMessage,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
};
module.exports = globalErrorHandler;