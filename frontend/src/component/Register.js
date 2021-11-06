import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();

    const Register = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });
            history.push('/login')
        } catch (error) {
            if (error) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <section>
            <div class="container">
                <form onSubmit={Register}>
                    <p>{ msg }</p>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nama Lengkap</label>
                    <input type="text" class="form-control" value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                    
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                    
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                    
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" class="form-control" value={confPassword} onChange={(e) => setConfPassword(e.target.value)}></input>
                </div>
                
                <button type="submit" class="btn btn-primary">Daftar</button>
                </form>
            </div>
        </section>
    )
}

export default Register
