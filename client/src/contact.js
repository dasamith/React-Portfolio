import React from 'react';



function Contact() {
    return (
        <div>
            <div class=" headerContainer">

                <h1 class="Headername">Find Me</h1>
                <div class="linkcontainer">

                    <a class="Links" href="https://github.com/dasamith">Github</a>
                    <a class="Links" href="https://www.linkedin.com/in/amith-das-1775b1170">Linkdin</a>
                </div>

            </div>
            <div class="container">

                <nav class=" navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/">Home</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/portfolio">Portfolio <span
                                    class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>


                <div style={{ alignItems: 'center' }}>
                    <h3>A dedicated and inspired web designer and Information Technology Enthusiast.</h3>
                    <p>2515 W walnut st,Colmar, PA-18915.</p>
                    <p>267-498-8404</p>
                    <p>amith123.ad@gmail.com</p>
                </div>

                <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                            placeholder="name@example.com" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Massage</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <button type="button">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
