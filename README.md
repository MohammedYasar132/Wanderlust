# Wanderlust – Travel Booking Platform

Wanderlust is a **full-stack travel booking web application** that allows users to explore unique stays, view property details, and share accommodation listings.

The platform provides an intuitive interface for discovering travel destinations, browsing accommodations, and managing property listings.

This project demonstrates **full-stack web development, REST API architecture, authentication systems, cloud image storage, and interactive map integration**.

---

# 🚀 Features

## 🏡 Explore Travel Stays

Users can browse travel accommodations with detailed information including:

* Property title
* Description
* Price per night
* Location
* Images

---

## 🔎 Discover Listings

The platform allows users to explore properties based on location and travel preferences.

Users can view:

* Destination listings
* Property details
* Travel accommodations

---

## 📝 Create Property Listings

Registered users can create their own listings by providing:

* Property details
* Location information
* Pricing
* Images

This allows property owners to share their stays with travelers.

---

## 📸 Image Upload System

Property images are uploaded and stored using **Cloudinary**, enabling:

* Secure media storage
* Fast image delivery
* Optimized image performance

---

## 🔐 Authentication System

Secure authentication implemented using:

* Passport.js
* Express session management
* Cookie-based authentication

Users can register accounts and securely manage their listings.

---

## 🗺️ Interactive Map Integration

Listings include map-based location visualization allowing users to see where properties are located.

---

## ⭐ Review and Rating System

Users can leave reviews and ratings for properties including:

* User ratings
* Feedback comments
* Experience reviews

---

# 🏗️ Tech Stack

## Frontend

* HTML
* CSS
* JavaScript
* Bootstrap

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose

## Authentication

* Passport.js
* Express Session

## Media Storage

* Cloudinary

## Map Services

* Mapbox API

---

# ⚙️ System Architecture

User visits platform
↓
Browse travel listings
↓
View property details
↓
Login or register account
↓
Create or manage listings
↓
Leave reviews and ratings

---

# 📂 Project Structure

Wanderlust
│
├── models
├── routes
├── controllers
├── views (EJS templates)
├── public
│   ├── css
│   ├── js
│   └── images
└── app.js

---

# 🧑‍💻 Installation

## Clone the Repository

git clone https://github.com/your-username/wanderlust.git
cd wanderlust

---

## Install Dependencies

npm install

---

## Start the Application

node app.js

---

# 🔐 Environment Variables

Create a `.env` file in the project root.

Example configuration:

MONGO_URI=your_mongodb_connection
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
SESSION_SECRET=your_secret

---

# 🌐 Future Improvements

* Online booking functionality
* Payment integration
* Advanced search filters
* User profile dashboard
* Property availability calendar
* Mobile responsive improvements

---

# 👨‍💻 Author

Mohammed Yasar
MERN Stack Developer

GitHub: https://github.com/MohammedYasar132

---

# ⭐ Support

If you find this project helpful, please give it a ⭐ on GitHub.
