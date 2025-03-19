import dotenv from 'dotenv';
dotenv.config({ path: 'config/.env' });
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'secret_KEY';
export const PORT = process.env.PORT || 8080;
export const DATABASE_URL = process.env.DATABASE_URL;
export const API_BASE_VERSION = process.env.API_BASE_VERSION || '/api/v1';
