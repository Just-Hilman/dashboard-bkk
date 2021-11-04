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
            <Link to="/addPeserta" class="btn btn-outline-success">Add Peserta</Link>
            <table class="table table-hover">
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
                                <Link to={`/edit/${peserta.id}`} class="btn btn-warning">Ubah</Link>
                                <button onClick={() => deletePeserta(peserta.id)} class="btn btn-danger">Hapus</button>
                            </td>
                        </tr>
                    )) }    
                  
              </tbody>
            </table>
            
        </div>
    )
}

export default PesertaList
