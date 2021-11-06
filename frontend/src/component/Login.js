import React from 'react'

const Login = () => {
    return (
        <section>
            <div class="container">
                <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                </div>
                    
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"></input>
                </div>
                    
                <p>Belum memiliki akun? <a class="link-info" href="http://localhost:3000/register">Daftar</a> </p>
                
                <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
        </section>
    )
}

export default Login
