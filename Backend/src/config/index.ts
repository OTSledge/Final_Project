import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default {
    port: parseInt(process.env.PORT, 10) || 4000, // Providing a default value
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
    recipientEmail: process.env.RECIPIENT_EMAIL, // Consider fetching from .env
};