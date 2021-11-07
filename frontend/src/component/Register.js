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
        <section class="auth">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-7 col-lg-5">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="sign mb-5">SIGN UP</h3>
                                <form onSubmit={Register}>
                                    <p>{ msg }</p>
                                    <div class="mb-3">
                                        <input type="text" class="form-control" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                                    </div>
                                        
                                    <div class="mb-3">
                                        <input type="email" class="form-control" placeholder="Enter Email" id="exampleInputEmail1" aria-describedby="emailHelp" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                    </div>
                                        
                                    <div class="mb-3">
                                        <input type="password" class="form-control" placeholder="Password" id="exampleInputPassword1" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                                    </div>
                                        
                                    <div class="mb-3">
                                        <input type="password" class="form-control" placeholder="Konfirm Password" id="exampleInputPassword1" class="form-control" value={confPassword} onChange={(e) => setConfPassword(e.target.value)}></input>
                                    </div>

                                    <div class="form-group form-check ml-2">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                        <label class="form-check-label" for="exampleCheck1">I Agree to <a class="agree" href="">Terms of service & Privacy Policy</a> </label>
                                    </div>


                                    
                                    <button type="submit" class="btn btn-primary form-control">Daftar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register
