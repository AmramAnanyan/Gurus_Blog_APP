# Server

## Express TypeScript App with Prisma, Express Validator, File Upload & Swagger API Docs
# Attention:

## The .env file containing the database URL has been committed. You can use it for accessing my database.
## Description

This project is a boilerplate for an Express application built with TypeScript and object-oriented programming. It follows a modular architecture with Routes, Controllers, and Services. The app uses Prisma ORM for PostgreSQL, Express Validator for request validation, Multer for handling file uploads, and Swagger for API documentation.

## Features

- **CRUD operations** for blog posts with file upload support.
- **Search functionality** to filter blog posts based on title and description.
- **Express Validator** for validating request payloads.
- **Prisma ORM** for interacting with a PostgreSQL database.
- **File upload** functionality via Multer.
- **Swagger API Documentation** to easily test and explore API endpoints.
- **Modular Architecture** with clearly separated Routes, Controllers, and Services.

  ![Swagger doc](./README_IMAGES/swagger-img.png)

## Technologies

- **Node.js** with Express
- **TypeScript**
- **Prisma ORM** (with PostgreSQL)
- **Express Validator**
- **Multer** (for file uploads)
- **Swagger (swagger-jsdoc & swagger-ui-express)**

## Prerequisites

- Node.js (v22.13.1)
- PostgreSQL installed and running

## Project Structure

```plaintext
src/
├── controllers/
│ └── blogController.ts
├── services/
│ └── blogService.ts
├── routes/
│ └── blogRoutes.ts
├── middlewares/
│ └── fileUploadMiddleware.ts
├── utils/
│ └── searchUtils.ts
├── prisma/
│ └── schema.prisma
├── app.ts
├── server.ts
```

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AmramAnanyan/Gurus_Blog_APP.git
   cd server
   npm install
   DATABASE_URL="postgresql://your-user:your-password@localhost:5432/your-database"
   PORT=8080
   npx prisma migrate dev --name init
   npm run dev
   http://localhost:8080/api-docs
   ```

   # Client

---

## 📂 Project Structure

```plaintext
/src
 ├── app/              # Application setup (store, providers, etc.)
 ├── entities/         # Each entity has its own model & state
 │    ├── blog/        # Example: News entity
 │    └── ...
 ├── features/         # Features that combine entities & business logic
 │    ├── deleteAndEdit/        # Example: Authentication feature
 │
 │    └── ...
 ├── shared/           # Reusable utilities, components, hooks, etc.
 │    ├── ui/          # Shared UI components
 │    ├── api/         # API utilities
 │    ├── hooks/       # Custom React hooks
 │    └── ...
 ├── pages/            # Page components mapped to routes
 ├── index.tsx         # Entry point
 └── README.md         # Documentation
```

---

## ⚙️ Technologies Used

- **Frontend:** React 18, Redux Toolkit
- **State Management:** Redux Toolkit, RTK Query
- **Architecture:** Feature-Sliced Design (FSD)
- **API Requests:** Custom Fetch
- **Styling:** Styled component / CSS Modules
- **Build Tool:** Webpack
- **TypeScript:** Strongly typed components & store
- **Form Handling:** React Hook Form
- **Error Handling:** Toast notifications for API errors

---

## ✅ Key Features

✔ **Feature-Sliced Design (FSD)** for better scalability and maintainability.  
✔ **Redux Toolkit** for efficient state management.  
✔ **Modular structure** with separation of concerns between entities, features, and UI components.  
✔ **Reusable shared components & hooks** to avoid redundancy.  
✔ **Scalable & performance-optimized** with lazy loading and code splitting.

---

1. **Setup client:**

   ```bash
   cd client
   npm install
   PORT=3000
   npm start
   http://localhost:3000
   ```

![Home Page](./README_IMAGES/home.png)

![Create post](./README_IMAGES/create.png)

![Details Page](./README_IMAGES/details.png)

![Not Found Page](./README_IMAGES/404.png)

## 📚 Resources & Documentation

- 📖 [React Docs](https://react.dev/)
- 📖 [Redux Toolkit](https://redux-toolkit.js.org/)
- 📖 [Feature-Sliced Design](https://feature-sliced.design/)
- 📖 [TypeScript Docs](https://www.typescriptlang.org/)
- 📖 [Webpack](https://webpack.js.org/)

---
