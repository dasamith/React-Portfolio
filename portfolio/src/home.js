import React from 'react';
import profilepic from "./image/pic.jpg"

function Home() {
    return (
        <div>
            <header>
                <h1 class="Headername">Amith Das</h1>
                <div class="linkcontainer">

                    <a class="Links" href="https://github.com/dasamith">Github</a>
                    <a class="Links" href="https://www.linkedin.com/in/amith-das-1775b1170">Linkdin</a>
                </div>
            </header>


            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/">Home</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/portfolio">Portfolio <span
                                    class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="assets/contact.html">Contact</a>
                            </li>
                        </ul>

                    </div>
                </nav>


                <section>
                    <nav className='nav2'>
                        <img src={profilepic} width="220" height="220"></img>
                        <p>2515 W walnut st, Colmar,PA 18915.</p>
                        <p>Cell phone: 267-498-8404</p>
                        <p>Email: amith123.ad@gmail.com</p>
                        <p>A dedicated and inspired web designer and an Information Technology Enthusiast.</p>
                    </nav>
                    <article>

                        <div class="Education">
                            <p class="edu1">
                                <h3>Penn LPS (College of liberal and Professional studies)</h3>
                                <li>Penn LPS Coding React & Node JS Bootcamp Certification</li>
                                <li>Technologies: Github, html, css, javascript, express, react, bootstrap, SQL, mongodb, devops
                    </li>
                            </p>
                            <p class="edu2">
                                <h3>Montgomery County Community college, Bluebell PA</h3>
                                <li>Computer Science</li>

                            </p>
                        </div>

                        <div class="Experiaence">

                            <p class="job1">
                                <h3>Assembler/Packer
                                Curtiss Wright/ EST Group
                        September 2017- present</h3>
                                <li>Mark and label containers, containertags, or products, using marking tools.</li>
                                <li>Measure, weigh, and count products and materials.</li>
                                <li>Examine and inspect materials, and products</li>
                            </p>

                        </div>
                    </article>
                </section>
            </div>
        </div>
    );
}

export default Home;
