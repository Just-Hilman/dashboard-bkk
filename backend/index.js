import express from "express";
import db from "./config/database.js";
import lokerRoutes from "./routes/routeLoker.js";
import pesertaRoutes from "./routes/routePeserta.js";
import cors from "cors"

const app = express();

try {
    await db.authenticate();
    console.log('Database Connected..');
} catch (error) {
    console.error('Connection error:', error);
}

//loker
app.use(cors());
app.use(express.json());
app.use('/loker', lokerRoutes);


//peserta
app.use(express.json());
app.use('/peserta', pesertaRoutes);

app.listen(5000, () => console.log('Server running at port 5000'));