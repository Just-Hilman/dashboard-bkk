import express from "express";

import {
    getAllLamaran,
    createLamaran,
    getLamaranById,
    updateLamaran,
    deleteLamaran
} from "../controller/Lamaran.js";

const router = express.Router();

router.get('/', getAllLamaran);
router.get('/:id', getLamaranById);
router.post('/', createLamaran);
router.patch('/:id', updateLamaran);
router.delete('/:id', deleteLamaran);


export default router;