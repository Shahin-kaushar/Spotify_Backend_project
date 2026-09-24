# 🎵 Spotify Backend Project

A backend application inspired by Spotify, built to practice and demonstrate modern backend development concepts including REST APIs, authentication, database management, file storage, and scalable server-side architecture.

The project focuses on building the core backend infrastructure required for a music streaming platform, including user management, authentication, music-related data, and media/file handling.

## 🚀 Features

* 🔐 User authentication and authorization
* 👤 User registration and login
* 🔑 JWT-based authentication
* 🎵 Music and song management
* 📁 File and media upload functionality
* ☁️ ImageKit integration for cloud-based media storage
* 🗄️ MongoDB database integration
* 🌐 RESTful API architecture
* 🧩 Modular backend structure
* ⚙️ Environment-based configuration
* 🛡️ Protected API routes
* 📦 Middleware-based request handling
* 🔄 CRUD operations
* 🚀 Scalable backend architecture

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js
* JavaScript
* REST APIs

### Database

* MongoDB
* Mongoose

### Authentication & Security

* JWT (JSON Web Tokens)
* Password hashing
* Authentication middleware
* Authorization

### Cloud & Storage

* ImageKit
* Cloud-based media storage

### Development Tools

* Git
* GitHub
* Postman
* VS Code
* npm
* dotenv

## 📂 Project Structure

```text
spotify/
│
├── src/
│   ├── controllers/
│   │
│   ├── models/
│   │
│   ├── routes/
│   │
│   ├── middleware/
│   │
│   ├── services/
│   │
│   └── app.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

The project follows a modular architecture where routes, controllers, models, middleware, and services are separated to keep the codebase maintainable and easier to extend.

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Shahin-kaushar/Spotify_Backend_project.git
```

### 2. Navigate to the project

```bash
cd Spotify_Backend_project
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root:

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

Replace the placeholder values with your own credentials.


## ▶️ Running the Project

Start the development server:

```bash
npm run dev
```

Or, if the project uses the standard Node.js start command:

```bash
npm start
```

The server will run on:

```text
http://localhost:3000
```

The port may differ depending on your `.env` configuration.

## 🔐 Authentication Flow

The backend uses JWT-based authentication to protect private resources.

A typical authentication flow is:

```text
User Registration
       ↓
Password Hashing
       ↓
User Stored in MongoDB
       ↓
User Login
       ↓
Credentials Verification
       ↓
JWT Token Generated
       ↓
Protected API Requests
       ↓
Authentication Middleware
       ↓
Authorized Controller
```

## 🗄️ Database

MongoDB is used as the primary database, with Mongoose providing schema definition and database interaction.

The database layer handles application data such as:

* Users
* Songs
* Music metadata
* Uploaded media
* Other platform-related resources

## ☁️ ImageKit Integration

ImageKit is integrated into the backend for handling cloud-based image and media storage.

The storage service is responsible for:

* Uploading media
* Managing cloud-hosted files
* Generating accessible media URLs
* Connecting the application with ImageKit APIs

This keeps media storage separate from the application server and makes the backend easier to scale.

## 🧪 API Testing

You can test the backend APIs using Postman or another API testing tool.

Typical API workflow:

```text
Register User
     ↓
Login
     ↓
Receive JWT
     ↓
Add JWT to Authorization Header
     ↓
Access Protected Routes
```

For protected requests, use:

```text
Authorization: Bearer <your_jwt_token>
```

## 📌 Learning Objectives

This project was built to strengthen practical understanding of:

* Backend development with Node.js
* Express.js application architecture
* REST API development
* Authentication and authorization
* JWT implementation
* Password security
* MongoDB and Mongoose
* Middleware
* MVC/modular architecture
* Cloud file storage
* Environment variables
* API testing
* Git and GitHub
* Backend application design
