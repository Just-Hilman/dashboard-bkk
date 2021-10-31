import express from "express";

import {
    getAllPeserta,
    createPeserta,
    getPesertaById,
    updatePeserta,
    deletePeserta
} from "../controller/Peserta.js";

const router = express.Router();

router.get('/', getAllPeserta);
router.get('/:id', getPesertaById);
router.post('/', createPeserta);
router.patch('/:id', updatePeserta);
router.delete('/:id', deletePeserta);

export default router;