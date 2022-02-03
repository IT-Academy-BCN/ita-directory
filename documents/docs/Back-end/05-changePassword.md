# Change Password

Introduce image here.
Improve description..

The user enters the email, which is sent in the POST request body to the API. The API checks if the email exists, and if confirmed it sends back to the user's email a URL containing a token which expires in one hour.  
The user visits the URL, enters the new password 2 times and submits a POST request to the URL with the copies of the password in the request body.  
The API checks if the passwords are the same, checks the token, and if confirmed it updates the user record and sends back a confirmation message, or if something fails it returns the corresponding error messages.

![Drag Racing](../../static/img/changePassword.png)
