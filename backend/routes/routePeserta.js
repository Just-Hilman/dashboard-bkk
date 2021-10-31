import express from "express";

import {
    getAllPeserta,
    createPeserta
} from "../controller/Peserta.js";

const router = express.Router();

router.get('/', getAllPeserta);
router.post('/', createPeserta);

export default router;