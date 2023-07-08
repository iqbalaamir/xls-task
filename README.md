# Node.js MongoDB API (XLS TASK)

This is a Node.js API that allows uploading XLSX/CSV data into MongoDB and performing CRUD operations for User, Account, and Policy entities.

## Prerequisites

Before running the application, ensure that you have the following prerequisites installed on your machine:

- Node.js (version 18 or higher)


## Installation

1. Clone the repository to your local machine:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd xls-task
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Configuration

1. Rename the `.env.example` file to `.env` and update the necessary configuration values, such as MongoDB connection URL, port, and any other environment variables.

2. Ensure that your MongoDB instance is running and accessible.

## Usage

To run the application, use the following command:

```
npm start
```

The API server will start and listen on the specified port (default: 5000). You can access it at `http://localhost:5000` in your web browser or through API clients like Postman.

## API Documentation

The API documentation is available at `http://localhost:3000/api-docs` when the application is running. It provides detailed information about the available endpoints, request/response formats, and how to use them. You can explore and test the API endpoints directly from the documentation.

## Uploading Data

To upload XLSX/CSV data into MongoDB, send a POST request to the `/upload` endpoint with the file attached as `file` in the request body. The uploaded data will be processed and stored in the respective collections (Agent, User, Account, LOB, Carrier, Policy).

## CRUD Operations

The API supports the following CRUD operations for the User, Account, and Policy entities. Refer to the API documentation for detailed information about the request/response formats and available endpoints.

- User:
  - Create a new user: POST `/users`
  - Get all users: GET `/users`
  - Get a user by ID: GET `/users/:id`
  - Update a user by ID: PUT `/users/:id`
  - Delete a user by ID: DELETE `/users/:id`

- Account:
  - Create a new account: POST `/accounts`
  - Get all accounts: GET `/accounts`
  - Get an account by ID: GET `/accounts/:id`
  - Update an account by ID: PUT `/accounts/:id`
  - Delete an account by ID: DELETE `/accounts/:id`

- Policy:
  - Create a new policy: POST `/policies`
  - Get all policies: GET `/policies`
  - Get a policy by ID: GET `/policies/:id`
  - Update a policy by ID: PUT `/policies/:id`
  - Delete a policy by ID: DELETE `/policies/:id`

## Testing

To run the tests, use the following command:

```
npm test
```

This will execute the test suite and provide the test results.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue in the repository.

---

Feel free to customize and enhance this README file based on your specific project requirements. Provide detailed instructions and information to help users understand and use your Node.js MongoDB API effectively.
