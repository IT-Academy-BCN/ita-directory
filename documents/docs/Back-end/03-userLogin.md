# User Login

The user enters the email and the password, which are sent in the body of the POST request to the API.
The API checks if the email and password correspond in the DB, and if so it generates a JWT access token and a refresh token, which are sent back to the client in the body of the response.

![Drag Racing](../../static/img/login.png)
