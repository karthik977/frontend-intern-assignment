#Full Stack Intern Assignment

A full-stack MERN application built as part of a Full Stack Intern assignment.
The project includes user authentication, protected routes, and task management with a scalable backend architecture.

 ## Tech Stack
### Frontend
-React.js
-Tailwind CSS
-Axios
-React Router

### Backend
-Node.js
-Express.js
-MongoDB
-JWT Authentication
-bcrypt

---

## Features Implemented
-User Signup & Login with JWT authentication
-Password hashing using bcrypt
-Protected routes (Dashboard, Profile)
-User profile fetch & update
-Task CRUD operations
-Client-side and server-side validation
-Loading and error states
-API versioning (/api/v1)

---

## Project Structure
-frontend/
-backend/

## Setup Instructions
### Backend
cd backend
npm install
npm run dev

## Create a .env file in the backend folder:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret

## Backend runs on: http://localhost:5000

### Frontend
cd frontend
npm install
npm run dev


## Frontend runs on: http://localhost:5173

## API Documentation

-Postman collection can be created using the following API routes:
-Authentication
-POST /api/v1/auth/register
-POST /api/v1/auth/login
-GET /api/v1/me

## Tasks
-CRUD /api/v1/tasks

## Scaling for Production
-Environment-based configurations
-Refresh token implementation
-Docker containerization
-Rate limiting & caching (Redis)
-Database indexing for performance
-Frontend deployment on Vercel
-Backend deployment on AWS / GCP

## Security Note
-Authentication is implemented using JWT.
-Test credentials can be shared upon request.
