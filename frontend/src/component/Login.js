import React from 'react'

const Login = () => {
    return (
        <section class="auth">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-7 col-lg-5">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="sign mb-5">SIGN IN</h3>
                                <form>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" placeholder="Enter Email" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                    </div>
                                        
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Password</label>
                                        <input type="password" class="form-control" placeholder="Your Password" id="exampleInputPassword1"></input>
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
