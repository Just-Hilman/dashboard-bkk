import React from 'react'

const MainPage = () => {
    return (
        <html lang="en">
            <head>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

                {/* Bootstrap CSS */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>

            </head>

            <body>
                <header>
                    {/* Navbar */}
                    <nav class="navbar fixed-top navbar-expand-lg navbar-light">
                        <div class="container">
                            <a class="navbar-brand page-scroll" href="#home">BKK SMKN 6</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav mx-auto">
                                    <li class="nav-item active">
                                        <a class="nav-link page-scroll" href="#home">Home <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link page-scroll" href="#loker">Lowongan Kerja <span></span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link page-scroll" href="#contact">Contact Us <span></span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link page-scroll" href="#faq">FAQ <span></span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link page-scroll" href="#about">About <span></span></a>
                                    </li>
                                    <li class="nav-item">
                                        <button class="btn tombol-login">
                                            <svg width="30px" height="30px" viewBox="0 0 16 16" class="bi bi-person"
                                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                            </svg>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* End Of Navbar */}

                    {/* Jumbotron */}
                    <div class="jumbotron">
                        <div class="text-center">
                            <h1>Selamat Datang !</h1>
                            <h2>Di Portal Bursa Kerja Khusus SMKN 6 Bandung</h2>
                            <p>Have something great in mind? Feel free to contact me. <br></br>
                                I'll help you to make it happen.</p>
                        </div>
                            
                        <div class="cta">
                            <a href="http://localhost:3000/loker" class="jumbotron-button">Lihat Lowongan</a>
                        </div>
                        <div class="color-overlay"></div>
                    </div>

                    {/* End Of Jumbotron */}
                </header>

                <main>
                    <div class="my-content">
                        <div class="highlight-text">
                            <h2>How Can I Help You?</h2>
                            <h5>Our work then targeted, best practices outcomes social innovation synergy. <br></br>
                                Venture philanthropy, revolutionary inclusive policymaker relief. User-centered
                                program areas scale.
                            </h5>
                        </div>

                        <article id="consult" class="card">
                            <h5>Consult</h5>
                            <p>Co-create, design thinking; strengthen infrastructure resist granular.
                                Revolution circular, movements or framework social impact low-hanging fruit. 
                                Save the world compelling revolutionary progress.
                            </p>
                        </article>
                            
                        <article id="design" class="card">
                            <h5>Design</h5>
                            <p>Policymaker collaborates collective impact humanitarian shared value
                                vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile 
                                issue outcomes vibrant boots on the ground sustainable.
                            </p>
                        </article>
                            
                        <article id="develop" class="card">
                            <h5>Develop</h5>
                            <p>Revolutionary circular, movements a or impact framework social impact low-
                                hanging. Save the compelling revolutionary inspire progress. Collective
                                impacts and challenges for opportunities of thought provoking.
                            </p>
                        </article>
                            
                        <article id="marketing" class="card">
                            <h5>Marketing</h5>
                            <p>Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile,
                                replicable, effective altruism youth. Mobilize commitment to overcome
                                injustice resilient, uplift social transparent effective.
                            </p>
                        </article>
                            
                        <article id="manage" class="card">
                            <h5>Manage</h5>
                            <p>Change-makers innovation or shared unit of analysis. Overcome injustice
                                outcomes strategize vibrant boots on the ground sustainable. Optimism,
                                effective altruism invest optimism corporate social.
                            </p>
                        </article>
                            
                        <article id="evolve" class="card">
                            <h5>Evolve</h5>
                            <p>Activate catalyze and impact contextualize humanitarian. Unit of analysis
                                overcome injustice storytelling altruism. Thought leadership mass 
                                incarceration. Outcomes big data, fairness, social game-changer.
                            </p>
                        </article>

                        <div class="clear"></div>

                    </div>
                </main>

                <footer>
                    <p> &#169; 2021 Hilman. All Right Reserved.</p>
                </footer>
            </body>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

        </html>
    )
}

export default MainPage
