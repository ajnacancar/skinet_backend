# skinet

This is a README file for an e-commerce application built using .NET Core and Angular. The application allows users to browse and purchase products from various categories. It includes an admin panel for managing products, orders, and customers.

## Features

- User authentication and registration
- User and admin roles with different permissions
- Product browsing, filtering, and sorting
- Product search functionality
- Cart management with Redis for caching
- Stripe integration for secure payments
- PayPal integration for alternative payment method
- Order management and history
- Admin panel for managing products, orders, and customers
- PostgreSQL database for data storage

## Technology Stack

The following technologies are used to build this e-commerce application:

- Backend: 
  - .NET Core: a cross-platform framework for building APIs and web applications
  - PostgreSQL: an open-source relational database management system
  - Redis: an in-memory data structure store used for caching
  - Stripe: a payment processing platform
  - PayPal: a popular online payment system
  
- Frontend:
  - Angular: a JavaScript framework for building single-page applications
  - Bootstrap: for designing and styling the application
  - Material UI: a popular UI component library for Angular
 

## Setup Instructions

To set up and run the e-commerce application, please follow the steps below:

### Backend

1. Install .NET Core SDK if you don't have it already. Refer to the official [.NET Core documentation](https://docs.microsoft.com/en-us/dotnet/core/install/) for installation instructions.

2. Install PostgreSQL database server if you don't have it already. Refer to the official [PostgreSQL documentation](https://www.postgresql.org/download/) for installation instructions.

3. Install Redis server if you don't have it already. Refer to the official [Redis documentation](https://redis.io/download) for installation instructions.

4. Clone this repository

5. Navigate to the API project folder: `cd API`

6. Run the database migrations to create the necessary tables: `dotnet ef database update`

9. Start the backend server: `dotnet run`

### Frontend

1. Install Node.js if you don't have it already.
2. Go to clinet folder: `cd clienr`
3. Run: `npm i`
4. Run: `ng serve --o`
