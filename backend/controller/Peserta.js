import Peserta from "../model/modelPeserta.js";

export const getAllPeserta = async (req, res) => {
    try {
        const peserta = await Peserta.findAll();
        res.json(peserta);
    } catch (error) {
        res.json({ messege: error.messege });
    }

}

export const getPesertaById = async (req, res) => {
    try {
        const peserta = await Peserta.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(peserta[0]);
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

export const updatePeserta = async (req, res) => {
    try {
        await Peserta.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "messege": "Peserta Updated"
        });
    } catch (error) {
        res.json({ messege: error.messege });
    }

}

export const deletePeserta = async (req, res) => {
    try {
        await Peserta.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "messege": "Peserta Deleted"
        });
    } catch (error) {
        res.json({ messege: error.messege });
    }

}