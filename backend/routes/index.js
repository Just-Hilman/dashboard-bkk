import express from "express";

import {
    getAllLoker,
    createLoker,
    getLokerById,
    updateLoker,
    deleteLoker
} from "../controller/Loker.js";

import {
    getAllPeserta,
    createPeserta
} from "../controller/Peserta.js";

const router = express.Router();

router.get('/', getAllLoker);
router.get('/:id', getLokerById);
router.post('/', createLoker);
router.patch('/:id', updateLoker);
router.delete('/:id', deleteLoker);


router.get('/', getAllPeserta);
router.post('/', createPeserta);

export default router;