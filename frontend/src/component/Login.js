import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();

    const Auth = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                email: email,
                password: password
            });
            history.push('/dashboard')
        } catch (error) {
            if (error) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <section class="auth">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-7 col-lg-5">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="sign mb-5">SIGN IN</h3>
                                <form onSubmit={Auth}>
                                    <p>{ msg }</p>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                    </div>
                                        
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Password</label>
                                        <input type="password" class="form-control" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)}id="exampleInputPassword1"></input>
                                    </div>
                                        
                                    <p>Belum memiliki akun? <a class="link-info" href="http://localhost:3000/register">Daftar</a> </p>
                                    
                                    <button type="submit" class="btn btn-primary">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
