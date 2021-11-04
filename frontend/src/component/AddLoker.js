import { useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';

const AddLoker = () => {
    const [loker, setLoker] = useState('');
    const [perusahaan, setPerusahaan] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [kualifikasi, setKualifikasi] = useState('');
    const [jadwal, setJadwal] = useState('');

    const history = useHistory();

    const saveLoker = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/loker', {
            nama_loker: loker,
            nama_perusahaan: perusahaan,
            deskripsi: deskripsi,
            kualifikasi: kualifikasi,
            jadwal: jadwal
        });
        history.push("/loker");
    }

    return (
        <div>
            <form onSubmit={ saveLoker }>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Loker</label>
                    <input
                        class="form-control"
                        type="text"
                        placeholder="Lowongan Pekerjaan"
                        value={loker}
                        onChange={ (e) => setLoker(e.target.value) }
                    />
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Perusahaan</label>
                    <input
                        class="form-control"
                        type="text"
                        placeholder="Perusahaan"
                        value={perusahaan}
                        onChange={ (e) => setPerusahaan(e.target.value) }
                    />
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Deskripsi</label>
                    <textarea
                        class="form-control" aria-label="With textarea"
                        type="text"
                        placeholder="Deskripsi"
                        value={deskripsi}
                        onChange={ (e) => setDeskripsi(e.target.value) }
                    />
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Kualifikasi</label>
                    <textarea
                        class="form-control" aria-label="With textarea"
                        type="text"
                        placeholder="Kualifikasi" rows="10"
                        value={kualifikasi}
                        onChange={ (e) => setKualifikasi(e.target.value) }
                    />
                </div>

                <div class="mb-3">
                    <label className="label">Jadwal</label>
                    <input
                        class="form-control"
                        type="date"
                        placeholder="Jadwal Tes"
                        value={jadwal}
                        onChange={ (e) => setJadwal(e.target.value) }
                    />
                </div>

                <div class="mb-3">
                    <button type="submit" class="btn btn-primary">Save</button>
                </div>
            </form>

        </div>
    )
}

export default AddLoker
