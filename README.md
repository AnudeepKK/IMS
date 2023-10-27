# IMS
Inventory management system for item with crud operations

# Inventory Management System

This is a simple Inventory Management System built using React and Express.js with MongoDB as the database. It allows you to perform basic CRUD (Create, Read, Update, Delete) operations on inventory items.

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js
- MongoDB
- Dependencies listed in `package.json`

## Installation

1. Clone this repository to your local machine.

   ```bash
   git clone <repository_url>
   ```

2. Install the dependencies for the client and server:

   ```bash
   cd client
   npm install

   cd ../server
   npm install
   ```

3. Start the MongoDB server on your local machine:

   ```bash
   # You may need to specify a data directory
   mongod
   ```

4. Start the server:

   ```bash
   cd server
   node server.js
   ```

5. Start the client:

   ```bash
   cd client
   npm start
   ```

## Usage

- The client-side of the application is built using React and can be accessed in your web browser at `http://localhost:3000`.
- The server-side of the application is built using Express.js and serves as the backend for handling API requests.

## API Endpoints

- `GET /IMS`: Get a list of all inventory items.
- `POST /insert`: Insert a new inventory item.
- `DELETE /IMS/:id`: Delete an inventory item by ID.
- `PUT /IMS/:id`: Update an existing inventory item by ID.

## Database

This application uses MongoDB as the database. Make sure you have MongoDB installed and running. The database connection is established in `server.js`.

## Credits
- 👤 [Anudeep KK](https://github.com/AnudeepKK)
- 👤 [Nishanth Bhat](https://github.com/BhatNishanthGanesh)
- 👤 [ChethanPai](https://github.com/CheetahCodes21)
---

Enjoy managing your inventory with this simple application! If you have any questions or need further assistance, feel free to reach out.
