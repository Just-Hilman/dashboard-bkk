import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useHistory } from 'react-router-dom';

const DashboardUser = () => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const history = useHistory();

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

    return (
        <div>
            <h1>Selamat Datang: { name }</h1>
        </div>
    )
}

export default DashboardUser
