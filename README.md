# mern-goals-api
Backend API for CRUD operations on goals built with the MERN stack.

# MERN Goals API

A simple RESTful API for managing goals built with **MongoDB**, **Express**, and **Node.js**.

## Features

- Create, Read, Update, Delete (CRUD) goals
- Uses MongoDB with Mongoose for database interactions
- Handles errors with middleware
- Supports JSON requests

## Installation

1. Clone the repository:

```bash
npm install

Create a .env file in the backend folder and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development


Run the server:

npm run dev

API Endpoints

GET /api/goals — Get all goals

POST /api/goals — Add a new goal (body: { "text": "Your goal" })

PUT /api/goals/:id — Update a goal by ID

DELETE /api/goals/:id — Delete a goal by ID

License

This project is licensed under the MIT License.
