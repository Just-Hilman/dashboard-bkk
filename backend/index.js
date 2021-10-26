import express from "express";
import db from "./config/database.js";
import lokerRoutes from "./routes/index.js";

const app = express();

try {
    await db.authenticate();
    console.log('Database Connected..');
} catch (error) {
    console.error('Connection error:', error);
}

app.use(express.json());
app.use('/loker', lokerRoutes);

app.listen(5000, () => console.log('Server running at port 5000'));