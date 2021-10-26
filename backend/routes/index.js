import express from "express";

import {
    getAllLoker,
    createlLoker,
    getLokerById
} from "../controller/Loker.js";

const router = express.Router();

router.get('/', getAllLoker);
router.get('/:id', getLokerById);
router.post('/', createlLoker);

export default router;