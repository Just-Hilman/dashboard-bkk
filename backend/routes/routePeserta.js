import express from "express";

import {
    getAllPeserta,
    createPeserta,
    getPesertaById,
    updatePeserta,
    deletePeserta,
    getPesertaByIdLoker
} from "../controller/Peserta.js";

const router = express.Router();

router.get('/', getAllPeserta);
router.get('/:id', getPesertaById);
router.post('/', createPeserta);
router.patch('/:id', updatePeserta);
router.delete('/:id', deletePeserta);
router.get('/loker/:id', getPesertaByIdLoker);

export default router;