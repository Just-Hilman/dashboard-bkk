import express from "express";
import db from "./config/database.js";
import lokerRoutes from "./routes/routeLoker.js";
import pesertaRoutes from "./routes/routePeserta.js";
import usersRoutes from "./routes/routeUsers.js";
import cors from "cors"

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

//login
app.use(express.json());
app.use('/users', usersRoutes);

app.listen(5000, () => console.log('Server running at port 5000'));