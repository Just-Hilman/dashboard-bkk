import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

const PesertaList = () => {
    const [peserta, setPeserta] = useState([]);

    useEffect(() => {
        getPeserta();
    }, []);

    const getPeserta = async () => {
        const response = await axios.get('http://localhost:5000/peserta');
        setPeserta(response.data);
    }

    const deletePeserta = async (id) => {
        await axios.delete(`http://localhost:5000/peserta/${id}`);
        getPeserta();
    }

    return (
        <div>
            <Link to="/addPeserta" className="button is-success is-outlined mt-5">Add Peserta</Link>
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
              <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Alamat</th>
                    <th>Tanggal Lahir</th>
                    <th>Jurusan</th>
                    <th>No Telepon</th>
                    <th>Email</th>
                    <th>Loker</th>
                    <th>Action</th>
                </tr>
              </thead>

            <tbody>
                    {peserta.map((peserta, index) => (
                        <tr key={peserta.id}>
                            <td>{ index +1 }</td>
                            <td>{ peserta.nama }</td>
                            <td>{ peserta.alamat }</td>
                            <td>{ peserta.tgl_lahir }</td>
                            <td>{ peserta.jurusan }</td>
                            <td>{ peserta.no_telp }</td>
                            <td>{ peserta.email }</td>
                            <td>{ peserta.id_loker }</td>
                            <td>
                                <Link to={`/edit/${peserta.id}`} className="button is-warning is-focused">Ubah</Link>
                                <button onClick={() => deletePeserta(peserta.id)} className="button is-danger is-focused">Hapus</button>
                            </td>
                        </tr>
                    )) }    
                  
              </tbody>
            </table>
            
        </div>
    )
}

export default PesertaList
