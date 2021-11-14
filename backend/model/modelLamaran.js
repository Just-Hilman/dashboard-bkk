import { Sequelize, STRING } from 'sequelize';
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Lamaran = db.define('lamaran_pekerjaan', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_loker: {
        type: DataTypes.INTEGER
    },
    nama_loker: {
        type: DataTypes.STRING
    },
    nama_perusahaan: {
        type: DataTypes.STRING
    },
    id_peserta: {
        type: DataTypes.INTEGER
    },
    nama_peserta: {
        type: DataTypes.STRING
    },
    alamat: {
        type: DataTypes.STRING
    },
    jurusan: {
        type: DataTypes.STRING
    },
    no_telp: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default Lamaran;