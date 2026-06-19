MHL Collection - E-Commerce Clothing Store
📌 Project Description
MHL Collection is an online boutique specializing in luxury clothing, shoes, and accessories. This project is a complete e-commerce platform featuring an admin dashboard, shopping cart system, multi-step checkout process, and user authentication.

🎯 Project Objectives
Build a fully functional online store using vanilla HTML, CSS, and JavaScript

Provide a smooth user experience with an interactive shopping cart

Implement an admin system for product management

Ensure responsive and aesthetically pleasing design

🛠️ Technologies Used
HTML5 - Page structure

CSS3 - Styling and layout (responsive design, animations, gradients)

Vanilla JavaScript - Business logic, interactivity, cart management

LocalStorage - User data storage and authentication

Crypto API - Secure password hashing

📂 File Structure
Main Pages
File	Description
index.html	Homepage showcasing the collection
product.html	Complete product catalog with filters
checkout.html	4-step checkout process
connexion.html	Authentication (Login/Sign Up)
Adminn.html	Admin dashboard
Product Detail Pages
product1.html through product8.html - Individual product detail pages

Support Files
File	Description
index.css	Global styles and responsive design
script.js	JavaScript logic (cart, filters, animations)
login.html	Admin login page
README.md	Project documentation
✨ Implemented Features
👤 User Features
Navigation - Main menu with access to all sections

Product Catalog - Display products with images, prices, sizes

Filter System - Filter by category, price, size

Shopping Cart - Add/remove products, quantity management

Checkout Process - 4 steps (Shipping → Payment → Review → Confirmation)

Authentication - Secure registration and login with SHA-256 hashing

🔐 Admin Features
Dashboard - Overview (product/order/user statistics)

Product Management - Add, edit, delete products

Order Management - Track customer orders

User Management - Manage client accounts

🚀 Technical Features
Shopping Cart
javascript
// Cart structure
let cart = [
  { id: 1, name: "Costume Chloe", price: 5000, quantity: 1, image: "url" }
];
Dynamic product addition

Quantity increment/decrement

Individual item removal

Automatic total calculation

Optional persistence enhancement available

Authentication System
Registration with SHA-256 hashing

Credential verification

Secure LocalStorage storage

Persistent user session

Checkout Process
Step 1 - Shipping information

Step 2 - Payment method selection (Credit Card, PayPal, Cash on Delivery)

Step 3 - Order review and confirmation

Step 4 - Order confirmation with tracking number

Responsive Design
Grid and Flexbox layout

Media queries for mobile/tablet

CSS animations (hover effects, transitions, marquee)

📊 Admin Dashboard
Product Management
Add - Complete form (name, category, price, stock, description, image)

Edit - Inline editing via prompt()

Delete - Confirmation before deletion

Display - Responsive table with all product information

Statistics
Total number of products

Total number of orders

Total number of users

🎨 Design and Interface
Color Palette
Primary: #aa7f54 (Golden brown)

Secondary: #8f7b5d (Dark brown)

Accent: #d6c8a9 (Beige)

Background: #fbf9f4 (Cream)

Typography
Dancing Script - Titles and elegant elements

Arial - Main content

Visual Effects
Box shadows

Gradients

Transition animations

Hover effects on products

Animated marquee

🔒 Security
Password hashing with Crypto API (SHA-256)

Protected admin authentication (admin@gmail.com / 1234)

Client-side form validation

Data stored locally (no backend required)

🚧 Future Improvements
Backend integration (Node.js/Express)

Database connection (MongoDB/MySQL)

Email confirmation for orders

Product reviews and ratings

Advanced search functionality

Wishlist feature

Payment gateway integration

Order history for users

📦 Installation and Setup
Clone the repository

bash
git clone https://github.com/yourusername/MHL-Collection.git
Navigate to project directory

bash
cd MHL-Collection
Open the application

Simply open index.html in your web browser

No server required (all data stored locally)

Admin Access

Email: admin@gmail.com

Password: 1234

🗂️ Data Storage
All data is stored client-side using LocalStorage:

User accounts with hashed passwords

Product catalog (initial data)

Shopping cart contents

Current user session

🤝 Contributing
Contributions are welcome! Here's how you can help:

Fork the repository

Create a feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📝 License
This project is open source and available under the MIT License.

👥 Team
| Name | GitHub |
|------|--------|
| [Maroua] | [@marwaaa16 marwaoudj](https://github.com/marwaaa16) |
| [Lina] | [@lyna-dev](https://github.com/lyna-dev) |
