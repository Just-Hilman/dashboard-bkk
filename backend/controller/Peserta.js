import Peserta from "../model/modelPeserta.js";

export const getAllPeserta = async (req, res) => {
    try {
        const peserta = await Peserta.findAll();
        res.json(peserta);
    } catch (error) {
        res.json({ messege: error.messege });
    }

}

export const createPeserta = async (req, res) => {
    try {
        await Peserta.create(req.body);
        res.json({
            "messege": "Peserta Added"
        });
    } catch (error) {
        res.json({ messege: error.messege });
    }

}