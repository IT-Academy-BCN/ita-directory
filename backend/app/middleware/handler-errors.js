//No route found handler
const routeFoundHandler = ((req, res, next) => {
    res.status(404);
    res.json({
        message: 'Error. Route not found',
    })
})


//Error handler
const errorHandler = ((err,req, res, next) => {
    const {statusCode = 500, code, header, message} = err;

    res.status(statusCode);
    res.json({
        code,
        header,
        message,
    })
})

module.exports ={ routeFoundHandler,errorHandler}
  
