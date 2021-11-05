import express from "express";
import dotenv from "dotenv";
import db from "./config/database.js";
import lokerRoutes from "./routes/routeLoker.js";
import pesertaRoutes from "./routes/routePeserta.js";
import usersRoutes from "./routes/routeUsers.js";
import usersLogin from "./routes/loginUsers.js";
import cors from "cors"
dotenv.config();

const app = express();

try {
    await db.authenticate();
    console.log('Database Connected..');
} catch (error) {
    console.error('Connection error:', error);
}

app.use(cors());

//loker

app.use(express.json());
app.use('/loker', lokerRoutes);


//peserta
app.use(express.json());
app.use('/peserta', pesertaRoutes);

//users
app.use(express.json());
app.use('/users', usersRoutes);

//login
app.use('/login', usersLogin);

app.listen(5000, () => console.log('Server running at port 5000'));