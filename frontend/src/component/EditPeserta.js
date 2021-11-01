import { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';

const EditPeserta = () => {
    const [nama, setNama] = useState('');
    const [alamat, setAlamat] = useState('');
    const [tglLahir, setTglLahir] = useState('');
    const [jurusan, setJurusan] = useState('');
    const [noTelp, setNoTelp] = useState('');
    const [email, setEmail] = useState('');
    const [idLoker, setIdLoker] = useState('');

    const { id } = useParams();
    const history = useHistory();

    const updatePeserta = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/peserta/${id}`, {
            nama: nama,
            alamat: alamat,
            tgl_lahir: tglLahir,
            jurusan: jurusan,
            no_telp: noTelp,
            email: email,
            id_loker: idLoker
        });
        history.push("/");
    }

    useEffect(() => {
        getPesertaById();
    }, []);

    const getPesertaById = async () => {
        const response = await axios.get(`http://localhost:5000/peserta/${id}`);
        setNama(response.data.nama);
        setAlamat(response.data.alamat);
        setTglLahir(response.data.tgl_lahir);
        setJurusan(response.data.jurusan);
        setNoTelp(response.data.no_telp);
        setEmail(response.data.email);
        setIdLoker(response.data.id_loker);
    }

    return (
        <div>
            <form onSubmit={ updatePeserta }>
            <div>
                    <label className="label">Nama Peserta</label>
                    <input
                        class="input is-primary"
                        type="text"
                        placeholder="Nama Peserta"
                        value={nama}
                        onChange={ (e) => setNama(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Alamat</label>
                    <input
                        class="input is-primary"
                        type="text"
                        placeholder="Alamat"
                        value={alamat}
                        onChange={ (e) => setAlamat(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Tanggal Lahir</label>
                    <textarea
                        class="input"
                        type="date"
                        placeholder="Tanggal Lahir"
                        value={tglLahir}
                        onChange={ (e) => setTglLahir(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Jurusan</label>
                    <textarea
                        class="input is-primary"
                        type="text"
                        placeholder="Jurusan"
                        value={jurusan}
                        onChange={ (e) => setJurusan(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">No Telepon</label>
                    <input
                        class="input is-primary"
                        type="text"
                        placeholder="No Telepon"
                        value={noTelp}
                        onChange={ (e) => setNoTelp(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <input
                        class="input is-primary"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Loker</label>
                    <input
                        class="input is-primary"
                        type="text"
                        placeholder="Loker"
                        value={idLoker}
                        onChange={ (e) => setIdLoker(e.target.value) }
                    />
                </div>

                <div className="field">
                    <button className="button is-link is-outlined">Update</button>
                </div>
            </form>

        </div>
    )
}

export default EditPeserta
