import express from "express";
import { Login } from "../controller/Users.js";

const router = express.Router();

router.post('/', Login);

export default router;