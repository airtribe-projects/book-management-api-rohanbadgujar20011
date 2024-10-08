Book Management System
Overview
The Book Management System is a MERN stack application that allows users to manage a collection of books. Users can register, log in, and perform CRUD (Create, Read, Update, Delete) operations on books. The application also features JWT-based authentication to secure the routes and ensure that only authorized users can access specific endpoints.

Features
User Registration and Login: Users can register with a username, email, and password. Passwords are hashed using bcrypt for security. Upon successful login, a JWT token is generated for authentication.
Book Management: Users can add, view, update, and delete books. Each book contains details such as the title, author, publication date, number of pages, and price.
JWT Authentication: Protects routes by ensuring that only authenticated users can access them.
MongoDB Integration: Data is persisted using MongoDB, a NoSQL database.
Project Structure
plaintext
Copy code
.
├── Models
│ ├── Book.js # Book model schema
│ └── User.js # User model schema
├── Controllers
│ ├── bookController.js # Handles CRUD operations for books
│ └── userController.js # Handles user registration and login
├── Middleware
│ └── authMiddleware.js # JWT token verification middleware
├── Routes
│ ├── bookRoutes.js # Routes for book operations
│ └── userRoutes.js # Routes for user authentication
├── .env # Environment variables
├── app.js # Main application entry point
├── package.json # Project dependencies and scripts
└── README.md # Project documentation
Setup Instructions
Prerequisites
Node.js: Make sure you have Node.js installed on your machine.
MongoDB: You need a running instance of MongoDB (local or cloud).
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/book-management-system.git
cd book-management-system
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and add the following environment variables:

plaintext
Copy code
MONGODB_URI=mongodb://localhost:27017/book_management_system
JWT_SECRET=your_jwt_secret
Replace your_jwt_secret with a strong secret key for JWT.
Run the application:

bash
Copy code
npm start
The application will start on http://localhost:5000.

API Endpoints
User Authentication
Register a new user:

POST /api/users/register
Body:
json
Copy code
{
"username": "exampleuser",
"email": "user@example.com",
"password": "password123"
}
Login a user:

POST /api/users/login
Body:
json
Copy code
{
"email": "user@example.com",
"password": "password123"
}
Book Management (Protected Routes)
Create a new book:

POST /api/books
Header: Authorization: Bearer <JWT_TOKEN>
Body:
json
Copy code
{
"title": "Book Title",
"author": "Author Name",
"publicationDate": "2023-08-26",
"pages": 300,
"price": 19.99
}
Get all books:

GET /api/books
Header: Authorization: Bearer <JWT_TOKEN>
Get a book by ID:

GET /api/books/:id
Header: Authorization: Bearer <JWT_TOKEN>
Update a book by ID:

PUT /api/books/:id
Header: Authorization: Bearer <JWT_TOKEN>
Body:
json
Copy code
{
"title": "Updated Title",
"author": "Updated Author",
"publicationDate": "2023-08-27",
"pages": 350,
"price": 24.99
}
Delete a book by ID:

DELETE /api/books/:id
Header: Authorization: Bearer <JWT_TOKEN>
Testing
To test the application, you can use tools like Postman or cURL to send HTTP requests to the API endpoints.

License
This project is licensed under the MIT License. You can freely use, modify, and distribute the code.
