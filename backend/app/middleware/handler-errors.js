const routeFoundHandler = ((req, res, next) => {
    res.status(404);
    res.json({
        message: 'Error. Route not found',
    })
}) 
  
