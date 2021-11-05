import express from "express";
import { getUsers, Register, Login } from "../controller/Users.js";

const router = express.Router();

router.get('/', getUsers);
router.post('/', Register);
router.post('/', Login);

export default router;