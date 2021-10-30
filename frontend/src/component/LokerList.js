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

    return (
        <div>
            <Link to="/add" className="button is-success is-outlined mt-5">Add Loker</Link>
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
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
                            <td>2021-12-31</td>
                            <td>
                                <button className="button is-warning is-focused">Ubah</button>
                                <button className="button is-danger is-focused">Hapus</button>
                            </td>
                        </tr>
                    )) }    
                  
              </tbody>
            </table>
            
        </div>
    )
}

export default LokerList
