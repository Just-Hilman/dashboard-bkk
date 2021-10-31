import express from "express";

import {
    getAllPeserta,
    createPeserta,
    getPesertaById,
    updatePeserta
} from "../controller/Peserta.js";

const router = express.Router();

router.get('/', getAllPeserta);
router.get('/:id', getPesertaById);
router.post('/', createPeserta);
router.patch('/:id', updatePeserta);

export default router;