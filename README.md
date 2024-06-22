# Books and Authors

Welcome to the documentation for our cutting-edge Books and Authors API! This API is built using MongoDB and Node.js, offering a seamless and efficient solution for managing books and authors.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Models](#models)
4. [API Endpoints](#api-endpoints)
5. [Pagination](#pagination)
6. [Search Functionality](#search-functionality)
7. [Bonus Features](#bonus-features)
8. [Usage Examples](#usage-examples)
9. [Contributing](#contributing)
10. [License](#license)

---

## Introduction

Our Books and Authors API simplifies the process of managing books and authors, providing functionalities for CRUD operations, pagination, search functionality, and relationships between authors and books.

## Installation

To set up the Books and Authors API locally, follow these steps:

- Clone the GitHub repository to your local machine.
- Install the necessary dependencies using npm or yarn.
- Configure the MongoDB connection in the application.
- Run the application using `npm start` or `yarn start`.

## Models

### Book Model

- **title**: String (required) - Title of the book.
- **content**: String (required) - Content or description of the book.
- **author**: String (required) - Name of the author.
- **publishedDate**: Date (default to current date) - Date when the book was published.

### Author Model

- **name**: String (required) - Name of the author.
- **bio**: String - Biography or information about the author.
- **birthDate**: Date - Date of birth of the author.
- **books**: Array of ObjectIds referencing Book model - List of books written by the author.

## API Endpoints

### Books

- **POST /books**
  - Create a new book.

- **GET /books**
  - Retrieve all books.

- **GET /books/:id**
  - Retrieve a single book by its ID.

- **PATCH /books/:id**
  - Update a book by its ID.

- **DELETE /books/:id**
  - Delete a book by its ID.

### Authors

- **POST /authors**
  - Create a new author.

- **GET /authors**
  - Retrieve all authors.

- **GET /authors/:id**
  - Retrieve a single author by its ID.

- **PATCH /authors/:id**
  - Update an author by its ID.

- **DELETE /authors/:id**
  - Delete an author by its ID.

## Pagination

Pagination is implemented for the `/books` and `/authors` endpoints. You can specify the `page` and `limit` query parameters to paginate through the results.

Example:
- `/books?page=1&limit=10`

## Search Functionality

Search functionality allows filtering books by `title` or `author`, and authors by `name` or `bio`. Use the `/books/search/:query` and `/authors/search/:query` endpoints to perform searches.

Example:
- `/books/search/title?query=sample`
- `/authors/search/name?query=john`

## Bonus Features

- **Relationships**: Authors include a list of books they've written, enhancing the response data and usability of the API.

## Usage Examples

Here are some examples of using the API endpoints in Postman or similar tools:

1. **Create a new book**:
   - **URL**: `POST http://localhost:3000/books`
   - **Body**: JSON object with `title`, `content`, and `author` fields.

2. **Retrieve all books**:
   - **URL**: `GET http://localhost:3000/books`

3. **Retrieve a single book by ID**:
   - **URL**: `GET http://localhost:3000/books/:id`

4. **Update a book by ID**:
   - **URL**: `PATCH http://localhost:3000/books/:id`
   - **Body**: JSON object with fields to update.

5. **Delete a book by ID**:
   - **URL**: `DELETE http://localhost:3000/books/:id`

Similar endpoints exist for managing authors.

## Contributing

Contributions to the Books and Authors API project are welcome! Feel free to fork the repository, make improvements, and submit pull requests.
