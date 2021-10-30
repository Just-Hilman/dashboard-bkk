import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Loker = db.define('lowongan_pekerjaan', {
    nama_perusahaan: {
        type:DataTypes.STRING
    },
    nama_loker: {
        type:DataTypes.STRING
    },
    deskripsi: {
        type:DataTypes.STRING
    },
    kualifikasi: {
        type:DataTypes.STRING
    },
    jadwal: {
        type:DataTypes.DATE
    }
}, {
    freezeTableName: true
});

export default Loker;