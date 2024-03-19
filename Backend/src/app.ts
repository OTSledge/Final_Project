import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { connectToDatabase, getDb } from './Mongo'; // Adjust the path as needed
import { connected } from 'process';
const db = getDb()
console.log('db: ',db)
dotenv.config();
const PORT = process.env.PORT || 4000;
const transporterEmail = process.env.TRANSPORTER_EMAIL
const transporterPW = process.env.TRANSPORTER_PW
const destinationEmail = process.env.DESTINATION_EMAIL

const run = async() => {
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Example using Gmail; adjust according to your email provider
        auth: {
          user: transporterEmail,
          pass: transporterPW, // It's safer to use environment variables for credentials
        },
      });

    const app = express();
    app.use(express.json());
    app.use(cors());
    app.post('/send-email', async (req: Request, res: Response) => {
        const { senderEmail, senderName, subject, message } = req.body;
        console.log('in backend')
        try {
            let info = await transporter.sendMail({
            from: `"${senderName}" <${senderEmail}>`, // sender address
            to: destinationEmail, // list of receivers
            subject: subject, // Subject line
            text: message, // plain text body
            });
    
            console.log("Message sent: %s", info.messageId);
            res.json({ success: true, message: 'Email sent successfully!' });
        } catch (error) {
            console.error("Error sending email: ", error);
            res.status(500).json({ success: false, message: 'Failed to send email.' });
        }
    });
    app.post('/make-post', async (req: Request, res: Response) => {
        const { title, content } = req.body;
        console.log('in make post')
        const db = getDb(); // Correctly get the DB instance

        if (!db) {
          res.status(500).json({ success: false, message: 'Database not initialized' });
          return;
        }
      
        console.log('db: ', db)
        const collection = db.collection('posts'); // Access the posts collection
      
        try {
          // Insert the new post into the collection
          const result = await collection.insertOne({ title, content });
          console.log('Post created with id:', result.insertedId);
          res.json({ success: true, message: 'Post created successfully!', postId: result.insertedId });
        } catch (error) {
          console.error('Error creating post:', error);
          res.status(500).json({ success: false, message: 'Failed to create post.' });
        }
      });

      app.get('/feed', async (req: Request, res: Response) => {
        const db = getDb(); // Ensure you get the database connection here
    
        if (!db) {
          res.status(500).json({ success: false, message: 'Database not initialized' });
          return;
        }
    
        try {
          const collection = db.collection('posts');
          const posts = await collection.find({}).toArray(); // Fetch all documents from 'posts' collection
          res.json(posts); // Send the posts back to the client
        } catch (error) {
          console.error('Error fetching posts:', error);
          res.status(500).json({ success: false, message: 'Failed to fetch posts.' });
        }
      });
    
    // Connect to MongoDB before starting the Express server
    const startServer = async () => {
        await connectToDatabase(); // Ensure MongoDB connection is established
      
        app.listen(PORT, () => {
          console.log(`Server running on port ${PORT}`);
        });
      };
      
      startServer().catch(console.error);
} 

run()