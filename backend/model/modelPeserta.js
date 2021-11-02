import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Peserta = db.define('peserta_seleksi', {
    nama: {
        type: DataTypes.STRING
    },
    alamat: {
        type: DataTypes.STRING
    },
    tgl_lahir: {
        type: DataTypes.DATE
    },
    jurusan: {
        type: DataTypes.STRING
    },
    no_telp: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    id_loker: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true
});

export default Peserta;