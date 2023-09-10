
# Expense Tracker Web Application

This is a simple Expense Tracker web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The application allows users to manage their expenses and income by providing features such as user authentication, adding/editing/deleting transactions, and visualizing their financial data.

## Features

- **User Authentication:** Users can register, log in, and securely authenticate themselves to access their personalized financial dashboard.

- **Transaction Management:** Users can add new transactions, edit existing ones, and delete transactions as needed.

- **Transaction Categories:** Transactions can be categorized as income or expenses, providing a clear overview of financial activities.

## Dependencies

### Server (Node.js/Express.js)

- [express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js. Used for building the server-side application.
- [colors](https://www.npmjs.com/package/colors): Easily add color to your terminal text. Used for improving console output readability.
- [morgan](https://www.npmjs.com/package/morgan): HTTP request logger middleware for Node.js. Used for logging HTTP requests for debugging purposes.
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a .env file. Used for managing environment configurations.
- [nodemon](https://www.npmjs.com/package/nodemon): Automatically restarts the server when code changes occur during development.
- [cors](https://www.npmjs.com/package/cors): Middleware for enabling Cross-Origin Resource Sharing. Used to allow client-side requests to the server.

### Database (MongoDB)

- [mongoose](https://www.npmjs.com/package/mongoose): MongoDB object modeling tool designed to work in an asynchronous environment. Used for interacting with the MongoDB database.

### Client (React)

- [axios](https://www.npmjs.com/package/axios): Promise-based HTTP client for making API requests. Used for communicating with the server-side API.
- [react-router-dom](https://www.npmjs.com/package/react-router-dom): DOM bindings for React Router, enabling navigation between different views. Used for client-side routing.
- [redux](https://www.npmjs.com/package/redux): A predictable state container for JavaScript apps. Used for managing global application state.
- [react-redux](https://www.npmjs.com/package/react-redux): Official React bindings for Redux. Used for integrating Redux with React components.
- [antd](https://www.npmjs.com/package/antd): A popular UI library for React that provides a wide range of pre-designed components. Used for creating a user-friendly interface.

### Concurrently

- [concurrently](https://www.npmjs.com/package/concurrently): Allows running multiple npm scripts concurrently. Used for running both the server and client simultaneously during development.

## Getting Started

1. Clone this repository to your local machine.

2. Install server dependencies:
   ```bash
   npm install
   
3. Install server dependencies
    ```bash
    npm i express colors morgan dotenv nodemon cors

4  Install MongoDB-related dependencies
    ```bash
    npm i mongoose

5. Create a React app in a 'client' folder
    ```bash
   npx create-react-app client
   cd client

6. Install client-side dependencies
    ```bash
    npm i axios react-router-dom redux react-redux antd

8. Install concurrently
    ```bash
    npm i concurrently

9. Run both the React app and server
     ```bash
    npm run dev

To set up the server and client, follow the commands above. Afterward, you can access the application in your web browser at http://localhost:3000.
