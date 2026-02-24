# 🌍 RoamSphere  
### A Full-Stack MERN Travel Accommodation Platform

🚀 **Live Demo:**  
👉 https://roamsphere-0xiy.onrender.com  

RoamSphere is a production-ready, full-stack accommodation booking platform inspired by modern travel marketplaces. It enables users to explore, create, manage, and review property listings with real-time geolocation and secure authentication.

Built using the **MERN stack** and deployed on **Render** with **MongoDB Atlas** integration.

---

## 📌 Features

### 🔐 Authentication & Authorization

- User registration & login (Passport.js)
- Session-based authentication
- Role-based access control (Owner permissions)
- Flash messages for user feedback

---

### 🏠 Listings Management

- Create, Read, Update, Delete (CRUD) listings
- Image upload using Cloudinary
- Owner-specific listing controls
- Data validation & centralized error handling

---

### ⭐ Reviews System

- Add & delete reviews
- Linked review-owner relationship
- Nested population using Mongoose

---

### 🗺️ Map Integration

- Mapbox Geocoding API integration
- Converts location text → geographic coordinates
- Stores GeoJSON geometry in database
- Interactive map rendering

---

### ☁️ Production Features

- MongoDB Atlas cloud database
- Render deployment
- Environment variable configuration
- Express session store using MongoStore
- Centralized error handling middleware
- Case-sensitive static file handling for Linux servers

---

## 🛠️ Tech Stack

### 🖥️ Frontend

- EJS Templating
- Bootstrap 5
- Custom CSS
- Font Awesome
- Mapbox GL JS

---

### ⚙️ Backend

- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- Passport.js
- Express-Session
- Connect-Mongo

---

### ☁️ Cloud Services

- MongoDB Atlas
- Cloudinary (Image Storage)
- Mapbox API
- Render (Deployment)

---

## 📂 Project Structure

RoamSphere
│
├── models/
├── routes/
├── controllers/
├── views/
│   ├── listings/
│   ├── reviews/
│   └── includes/
├── public/
│   ├── css/
│   └── js/
├── utils/
├── app.js
└── package.json


## 🔑 Environment Variables

Create a `.env` file locally with:
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
MAPBOX_TOKEN=your_mapbox_token
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret


In production (Render), these variables are configured via the dashboard.

---

## 🚀 Installation & Setup

### 1️⃣ Clone Repository
git clone https://github.com/Abhi-10949/RoamSphere.git
cd RoamSphere


### 2️⃣ Install Dependencies
npm install

### 3️⃣ Add Environment Variables

Create a `.env` file (see section above).

### 4️⃣ Run Application
node app.js


### Open in browser:
http://localhost:3000



---

## 🌍 Deployment

The application is deployed on **Render**.

### Key Deployment Configurations:

- Uses `process.env.PORT`
- Static files served via `express.static`
- MongoDB Atlas network access enabled
- Environment variables configured in Render dashboard
- Auto-deploy enabled on GitHub commits

---

## 🧠 Learning Highlights

Through building RoamSphere, I gained hands-on experience in:

- Production-level environment configuration
- Case-sensitive file handling on Linux servers
- Secure session management
- RESTful route structuring
- MVC architecture implementation
- API integration with Mapbox
- Image storage using Cloudinary
- Debugging real-world deployment errors

---

## 📈 Future Improvements

- Payment gateway integration
- Search & filter functionality
- Pagination for listings
- Booking system with date selection
- Admin dashboard
- JWT authentication version
- React frontend (Full MERN upgrade)

---

## 👨‍💻 Author

**Abhishek Kumar**  
Chandigarh University  
Full-Stack Developer | MERN Stack | AI & Research Enthusiast  

---

## ⭐ If You Like This Project

Give it a star on GitHub ⭐