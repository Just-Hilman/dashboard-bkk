export const getAllPeserta = async (req, res) => {
    try {
        const peserta = await Peserta.findAll();
        res.json(peserta);
    } catch (error) {
        res.json({ messege: error.messege });
    }

}