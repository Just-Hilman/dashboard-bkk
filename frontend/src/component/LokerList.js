import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import { useHistory } from 'react-router-dom';

const LokerList = () => {
    const [loker, setLoker] = useState([]);
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const history = useHistory();

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

    useEffect(() => {
        refreshToken();
    }, []);

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                history.push('/login');
            }
        }
    }

    const axiosJWT = axios.create();
    
    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
            return Promise.reject(error);
    });

    const Logout = async() => {
        try {
            await axios.delete('http://localhost:5000/logout');
            history.push("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <body id="page-top">
            <div id="wrapper">
                
                <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="http://localhost:3000/dashboard">
                        <div class="sidebar-brand-icon rotate-n-15">
                            <i class="fas fa-tools"></i>
                        </div>
                        <div class="sidebar-brand-text mx-3">BKK SMKN 6</div>
                    </a>

                    <hr class="sidebar-divider my-0"></hr>

                    <li class="nav-item active">
                        <a class="nav-link" href="http://localhost:3000/dashboard">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>


                    <hr class="sidebar-divider"></hr>

                    <li class="nav-item">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i class="fas fa-fw fa-cog"></i>
                            <span>Lowongan Pekerjaan</span>
                        </a>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div class="bg-white py-2 collapse-inner rounded">
                                <a class="collapse-item" href="http://localhost:3000/loker">Daftar Lowongan Pekrejaan</a>
                            </div>
                        </div>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                            aria-expanded="true" aria-controls="collapseUtilities">
                            <i class="fas fa-fw fa-wrench"></i>
                            <span>Seleksi</span>
                        </a>
                        <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                            data-parent="#accordionSidebar">
                            <div class="bg-white py-2 collapse-inner rounded">
                                <a class="collapse-item" href="utilities-color.html">Jadwal Seleksi</a>
                                <a class="collapse-item" href="http://localhost:3000/peserta">Peserta Seleksi</a>
                            </div>
                        </div>
                    </li>

                    <hr class="sidebar-divider"></hr>

                    <li class="nav-item">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                            aria-expanded="true" aria-controls="collapsePages">
                            <i class="fas fa-fw fa-folder"></i>
                            <span>Laporan</span>
                        </a>
                        <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                            <div class="bg-white py-2 collapse-inner rounded">
                                <a class="collapse-item" href="/">Rekap Harian</a>
                                <a class="collapse-item" href="/">Rekap Bulanan</a>
                            </div>
                        </div>
                    </li>
                    

                    <hr class="sidebar-divider d-none d-md-block"></hr>

                    <div class="sidebar-card d-none d-lg-flex">
                        <p class="text-center mb-2"><strong>BKK SMKN 6 Dashboard</strong> is created and distributed by Hilman</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </div>
                </ul>

                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                                <i class="fa fa-bars"></i>
                            </button>

                            <ul class="navbar-nav ml-auto">
                                <div class="topbar-divider d-none d-sm-block"></div>

                                <li class="nav-item dropdown no-arrow">
                                    <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="mr-2 d-none d-lg-inline text-gray-600 small"> <strong> Admin | </strong> { name }</span>
                                        <img class="img-profile rounded-circle"></img>
                                    </a>

                                    <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Profile
                                        </a>

                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Settings
                                        </a>

                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Activity Log
                                        </a>

                                        <div class="dropdown-divider"></div>

                                        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Logout
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </nav>

                        <div class="container-fluid">
                            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 class="h3 mb-0 text-gray-800">Daftar Lowongan Pekerjaan</h1>
                            </div>
                            
                            <div class="row">
                                <div class="col-xl-12 col-lg-7">
                                    <div class="card shadow mb-4">
                                        <div
                                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                            <h6 class="m-0 font-weight-bold text-primary">Lowongan Pekerjaan</h6>
                                            <div class="dropdown no-arrow">
                                                <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div>
                                                <div>
                                                    <Link to="/addLoker" class="btn btn-outline-success btn-tambah">Add Loker</Link>
                                                    <table class="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>No</th>
                                                            <th>ID Loker</th>    
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
                                                                    <td>{index + 1}</td>
                                                                    <td>{ loker.id }</td>
                                                                    <td>{ loker.nama_loker }</td>
                                                                    <td>{ loker.nama_perusahaan }</td>
                                                                    <td>{ loker.deskripsi }</td>
                                                                    <td>{ loker.kualifikasi }</td>
                                                                    <td>{ loker.jadwal }</td>
                                                                    <td>
                                                                        <Link to={`/edit/${loker.id}`} class="btn btn-warning btn-ubah">Ubah</Link>
                                                                        <button onClick={() => deleteLoker(loker.id)} class="btn btn-danger">Hapus</button>
                                                                    </td>
                                                                </tr>
                                                            )) }    
                                                        
                                                    </tbody>
                                                    </table>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer class="sticky-footer bg-white">
                        <div class="container my-auto">
                            <div class="copyright text-center my-auto">
                                <span>Copyright &copy; Hilman 2021</span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

            <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Apakah anda Yakin Logout?</h5>
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <button onClick={Logout} class="btn btn-primary" type="button" >Logout</button>
                        </div>
                    </div>
                </div>
            </div>

            
        </body>



        
    )
}

export default LokerList
