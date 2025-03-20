# Server

## Express TypeScript App with Prisma, Express Validator, File Upload & Swagger API Docs

## Description

This project is a boilerplate for an Express application built with TypeScript and object-oriented programming. It follows a modular architecture with Routes, Controllers, and Services. The app uses Prisma ORM for PostgreSQL, Express Validator for request validation, Multer for handling file uploads, and Swagger for API documentation.

## Features

- **CRUD operations** for blog posts with file upload support.
- **Express Validator** for validating request payloads.
- **Prisma ORM** for interacting with a PostgreSQL database.
- **File upload** functionality via Multer.
- **Swagger API Documentation** to easily test and explore API endpoints.
- **Modular Architecture** with clearly separated Routes, Controllers, and Services.

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

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-repository-url.git
   cd server
   npm install
   DATABASE_URL="postgresql://your-user:your-password@localhost:5432/your-database"
   PORT=8080
   npx prisma migrate dev --name init
   npm run dev
   http://localhost:8080/api-docs
   ```

   ![Swagger doc](./README_IMAGES/swagger-img.png)
