import express from "express";

import { getAllLoker } from "../controller/Loker.js";

const router = express.Router();

router.get('/', getAllLoker);

export default router;