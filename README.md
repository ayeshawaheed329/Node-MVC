# E-Commerce Website with Node.js, Express.js and Mongoose

## Project Overview
This e-commerce website is built with Node.js and follows the MVC (Model-View-Controller) architecture. It provides a range of features for users, including secure sign-up and sign-in, password reset via email, product management, shopping cart, order history, and more.

## Project Structure
The project is organized into three main sections:

1. **Model** - Built using Mongoose for defining the data structure and interacting with the database.

2. **View** - Utilizes the EJS templating engine for rendering dynamic content.

3. **Controller and Routes** - Define routes, perform database operations, and manage user interactions.

## Features

### 1. Sign Up
- Users can register for an account.
- Passwords are securely encrypted using the "bcryptjs" Node.js package.

### 2. Reset Password
- Users can reset their passwords through email notifications.
- Implemented using the "nodemailer" package for email sending.

### 3. Sign In
- Secure user authentication with session management.
- CSRF token is stored in the session for enhanced security.

### 4. Add Product
- Users can add products, including product images.
- "multer" is used to save images to the server, while the database stores the image URL/path.
- A file filter function is implemented to accept PNG, JPEG, and JPG image formats.

### 5. Listing of Products
- Two types of product listings: one for the shop and one for the admin.
- Admins can edit and delete products by requesting DB.

### 6. Shop
- Users can view and add products to their cart.

### 7. Cart
- Users can view and manage items in their shopping cart.
- They can place orders directly from the cart.

### 8. Orders
- Users can view a list of their orders.
- For each order, an invoice can be downloaded in PDF format.
- PDF generation is implemented using the "pdfkit" module.

### 9. Checkout
- Users can view checkout page
- Payement is integrated by using stripe.
- Create your own stripe account and replace my dummy keys with your to enable this feature

### Other Features
- Comprehensive error handling throughout the project.
- Input validation using "express-validator."

## Installation and Usage

### Prerequisites
Before getting started, ensure you have the following software and tools installed on your system:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- npm (Node Package Manager): Typically included with Node.js installation.

### Installation
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/your-project.git
2. cd Node-MVC # Change directory
3. NPM install # to install node modules
4. NPM start # to run project

