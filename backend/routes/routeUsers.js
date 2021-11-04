import express from "express";
import { getUsers, Register } from "../controller/Users.js";

const router = express.Router();

router.get('/', getUsers);
router.post('/', Register);

export default router;