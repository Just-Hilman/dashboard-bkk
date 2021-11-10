import React from 'react'

const MainPage = () => {
    return (
        <body>
            <header className="header-main">
                {/* Navbar */}
                <nav className="navbar fixed-top navbar-expand-lg navbar-light navbar-main">
                    <div className="container">
                        <a className="navbar-brand page-scroll navbar-brand-main" href="#home">BKK SMKN 6</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item nav-item-main active">
                                    <a className="nav-link nav-link-main page-scroll" href="#home">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item nav-item-main">
                                    <a className="nav-link nav-link-main page-scroll" href="#loker">Lowongan Kerja <span></span></a>
                                </li>
                                <li className="nav-item nav-item-main">
                                    <a className="nav-link nav-link-main page-scroll" href="#contact">Contact Us <span></span></a>
                                </li>
                                <li className="nav-item nav-item-main">
                                    <a className="nav-link nav-link-main page-scroll" href="#faq">FAQ <span></span></a>
                                </li>
                                <li className="nav-item nav-item-main">
                                    <a className="nav-link nav-link-main page-scroll" href="#about">About <span></span></a>
                                </li>
                                <li className="nav-item nav-item-main">
                                    <a href="http://localhost:3000/login">
                                        <button className="btn tombol-login" >
                                            <svg width="30px" height="30px" viewBox="0 0 16 16" className="bi bi-person"
                                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd"
                                                    d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                            </svg>
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* End Of Navbar */}

                {/* Jumbotron */}
                <div className="jumbotron jumbotron-fluid">
                    <div className="text-center-main">
                        <h1 class="display-4">Selamat Datang !</h1>
                        <h2>Di Portal Bursa Kerja Khusus SMKN 6 Bandung</h2>
                        <p class="lead">Have something great in mind? Feel free to contact me. <br></br>
                            I'll help you to make it happen.</p>
                    </div>
                        
                    <div className="cta">
                        <a href="http://localhost:3000/loker" className="jumbotron-button">Lihat Lowongan</a>
                    </div>
                    <div className="color-overlay"></div>
                </div>

                {/* End Of Jumbotron */}
            </header>

            <main>
                <div className="my-content">
                    <div className="highlight-text">
                        <h2>How Can I Help You?</h2>
                        <h5>Our work then targeted, best practices outcomes social innovation synergy. <br></br>
                            Venture philanthropy, revolutionary inclusive policymaker relief. User-centered
                            program areas scale.
                        </h5>
                    </div>

                    <article id="consult" className="card-main">
                        <h5>Consult</h5>
                        <p>Co-create, design thinking; strengthen infrastructure resist granular.
                            Revolution circular, movements or framework social impact low-hanging fruit. 
                            Save the world compelling revolutionary progress.
                        </p>
                    </article>
                        
                    <article id="design" className="card-main">
                        <h5>Design</h5>
                        <p>Policymaker collaborates collective impact humanitarian shared value
                            vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile 
                            issue outcomes vibrant boots on the ground sustainable.
                        </p>
                    </article>
                        
                    <article id="develop" className="card-main">
                        <h5>Develop</h5>
                        <p>Revolutionary circular, movements a or impact framework social impact low-
                            hanging. Save the compelling revolutionary inspire progress. Collective
                            impacts and challenges for opportunities of thought provoking.
                        </p>
                    </article>
                        
                    <article id="marketing" className="card-main">
                        <h5>Marketing</h5>
                        <p>Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile,
                            replicable, effective altruism youth. Mobilize commitment to overcome
                            injustice resilient, uplift social transparent effective.
                        </p>
                    </article>
                        
                    <article id="manage" className="card-main">
                        <h5>Manage</h5>
                        <p>Change-makers innovation or shared unit of analysis. Overcome injustice
                            outcomes strategize vibrant boots on the ground sustainable. Optimism,
                            effective altruism invest optimism corporate social.
                        </p>
                    </article>
                        
                    <article id="evolve" className="card-main">
                        <h5>Evolve</h5>
                        <p>Activate catalyze and impact contextualize humanitarian. Unit of analysis
                            overcome injustice storytelling altruism. Thought leadership mass 
                            incarceration. Outcomes big data, fairness, social game-changer.
                        </p>
                    </article>

                    <div className="clear"></div>

                </div>
            </main>

            <footer className="footer-main">
                <p> &#169; 2021 Hilman. All Right Reserved.</p>
            </footer>
        </body>
)
}

export default MainPage
