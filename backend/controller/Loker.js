import Loker from "../model/modelLoker.js";

export const getAllLoker = async (req, res) => {
    try {
        const loker = await Loker.findAll();
        res.json(loker);
    } catch (error) {
        res.json({ messege: error.messege });
    }

}