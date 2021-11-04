import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

const LokerList = () => {
    const [loker, setLoker] = useState([]);

    useEffect(() => {
        getLoker();
    }, []);

    const getLoker = async () => {
        const response = await axios.get('http://localhost:5000/loker');
        setLoker(response.data);
    }

    const deleteLoker = async (id) => {
        await axios.delete(`http://localhost:5000/loker/${id}`);
        getLoker();
    }

    return (
        <div>
            <Link to="/addLoker" class="btn btn-outline-success">Add Loker</Link>
            <table class="table table-hover">
              <thead>
                <tr>
                    <th>No</th>
                    <th>Lowongan Pekerjaan</th>
                    <th>Perusahaan</th>
                    <th>Deskripsi Pekerjaan</th>
                    <th>Kualifikan Pekerjaan</th>
                    <th>Jadwal Tes Seleksi</th>
                    <th>Action</th>
                </tr>
              </thead>

            <tbody>
                    {loker.map((loker, index) => (
                        <tr key={loker.id}>
                            <td>{ index +1 }</td>
                            <td>{ loker.nama_loker }</td>
                            <td>{ loker.nama_perusahaan }</td>
                            <td>{ loker.deskripsi }</td>
                            <td>{ loker.kualifikasi }</td>
                            <td>{ loker.jadwal }</td>
                            <td>
                                <Link to={`/edit/${loker.id}`} class="btn btn-warning">Ubah</Link>
                                <button onClick={() => deleteLoker(loker.id)} class="btn btn-danger">Hapus</button>
                            </td>
                        </tr>
                    )) }    
                  
              </tbody>
            </table>
            
        </div>
    )
}

export default LokerList
