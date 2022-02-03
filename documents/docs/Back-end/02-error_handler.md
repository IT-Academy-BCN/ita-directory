---
sidebar_position: 2
---

# Error Handling

Explanation of error handling, folders and files that have been used.
A file called handler-errors.s has been created in the middleware folder for error handling, functions have been initialized in the server.js file.

## routeFoundHandler

This function returns error 404 when we pass an invalid or non-existent endpoint

## errorHandler

Function that collects the rest of the produced errors. If the error incoming object has no statusCode values, we give them default values 500, otherwise it returns the error sent.
