Install Node.js, MySQL, and Docker on your machine, if you haven't already done so.
Create a new directory for your Node.js application and open a command prompt in that directory.
Copy the code provided and save it in a file called server.js in your application directory.
Open a command prompt in your application directory and run the following command to install the required dependencies:
bash
Copy code
npm install express mysql body-parser cors
npm install --save-dev jest supertest
Set up the MySQL database and create a table called "users" with the specified fields using the SQL script provided.
Modify the server.js file to update the MySQL connection details to match your own MySQL configuration, if necessary.
Start the Node.js server by running the following command in your application directory:
bash
Copy code
node server.js
You can now access the API using a tool like Postman or cURL. The API provides the following routes:
GET /users: Retrieves a list of all users in the database.
GET /users/:id: Retrieves a specific user by ID.
POST /users: Adds a new user to the database.
PUT /users/:id: Updates an existing user by ID.
DELETE /users/:id: Deletes an existing user by ID.
To use these routes, you can send HTTP requests to the server using the appropriate HTTP method (e.g. GET, POST, PUT, DELETE) and URL (e.g. http://localhost:3000/users/1). You can use a tool like Postman to make these requests.

For example, to retrieve a list of all users, you can send a GET request to the following URL:

bash
Copy code
http://localhost:3000/users
This will return a JSON response containing a list of all users in the database.

Similarly, to add a new user to the database, you can send a POST request to the following URL:

bash
Copy code
http://localhost:3000/users
You should include the new user details in the request body as a JSON object. For example:

json
Copy code
{
  "first_name": "John",
  "last_name": "Doe",
  "date_birth": "1990-01-01",
  "address": "123 Main St",
  "token": "abc123",
  "password": "mypassword",
  "mobile_phone": "555-555-5555",
  "email": "john.doe@example.com"
}
This will add a new user to the database with the specified details.

I hope this helps! Let me know if you have any further questions.