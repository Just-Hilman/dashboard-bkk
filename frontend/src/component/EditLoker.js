import { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';

const EditLoker = () => {
    const [loker, setLoker] = useState('');
    const [perusahaan, setPerusahaan] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [kualifikasi, setKualifikasi] = useState('');
    const [jadwal, setJadwal] = useState('');

    const { id } = useParams();
    const history = useHistory();

    const updateLoker = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/loker/${id}`, {
            nama_loker: loker,
            nama_perusahaan: perusahaan,
            deskripsi: deskripsi,
            kualifikasi: kualifikasi,
            jadwal: jadwal
        });
        history.push("/");
    }

    useEffect(() => {
        getLokerById();
    }, []);

    const getLokerById = async () => {
        const response = await axios.get(`http://localhost:5000/loker/${id}`);
        setLoker(response.data.nama_loker);
        setPerusahaan(response.data.nama_perusahaan);
        setDeskripsi(response.data.deskripsi);
        setKualifikasi(response.data.kualifikasi);
        setJadwal(response.data.jadwal);
    }

    return (
        <div>
            <form onSubmit={ updateLoker }>
                <div>
                    <label className="label">Loker</label>
                    <input
                        class="input is-primary"
                        type="text"
                        placeholder="Lowongan Pekerjaan"
                        value={loker}
                        onChange={ (e) => setLoker(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Perusahaan</label>
                    <input
                        class="input is-primary"
                        type="text"
                        placeholder="Perusahaan"
                        value={perusahaan}
                        onChange={ (e) => setPerusahaan(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Deskripsi</label>
                    <textarea
                        class="textarea"
                        type="text"
                        placeholder="Deskripsi"
                        value={deskripsi}
                        onChange={ (e) => setDeskripsi(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Kualifikasi</label>
                    <textarea
                        class="textarea"
                        type="text"
                        placeholder="Kualifikasi" rows="10"
                        value={kualifikasi}
                        onChange={ (e) => setKualifikasi(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Jadwal</label>
                    <input
                        class="input"
                        type="date"
                        placeholder="Jadwal Tes"
                        value={jadwal}
                        onChange={ (e) => setJadwal(e.target.value) }
                    />
                </div>

                <div className="field">
                    <button className="button is-link is-outlined">Update</button>
                </div>
            </form>

        </div>
    )
}

export default EditLoker
