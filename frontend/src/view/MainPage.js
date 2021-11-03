import React from 'react'

const MainPage = () => {
    return (
        <body>
            <header className="App-header">
                <nav class="navbar is-transparent level" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
                        </a>

                        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-end">
                            <a class="navbar-item">HOME</a>
                            <a class="navbar-item">LOWONGAN KERJA</a>
                            <a class="navbar-item">CONTACT US</a>
                            <a class="navbar-item">FAQ</a>
                            <a class="navbar-item">ABOUT</a>
                        </div>

                        <div class="navbar-end">
                            <div class="navbar-item">
                                <div class="buttons">
                                    <a class="button is-light">LOG IN</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </nav>
            </header>

            {/* <footer>
                <p> &#169; 2021 Hilman. All Right Reserved.</p>
            </footer> */}
        </body>
    )
}

export default MainPage
