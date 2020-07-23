import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MealPreppic from "./image/MealPrep.JPG"
import notetakerpic from "./image/note-taker.png"
import weatherpic from "./image/WeatherApp.JPG"
import WorkDaySchedulerpic from "./image/workdayscheduler.JPG"
import budgettrackerpic from "./image/online-offline-Budget-Trackers.png"
import employeedirectorypic from "./image/employee-directory.jpg"
function home() {
    return (
        <div>

            <header>
                <h1 className="Headername">Portfolio</h1>
                <div className="linkcontainer">

                    <a className="Links" href="https://github.com/dasamith">Github</a>
                    <a className="Links" href="https://www.linkedin.com/in/amith-das-1775b1170">Linkdin</a>
                </div>
            </header>

            <div className="container">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Home</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Portfolio <span class="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">Contact</a>
                            </li>


                        </ul>

                    </div>
                </nav>


                <div className="row">
                    <div className="img">

                        <h2>Meal & Sips</h2>
                        <a href="https://wayele.github.io/meals_and_sips/">
                            <img src={MealPreppic} class="w3-border" alt="Norway" style={{ padding: "4px", width: "100%" }} />
                        </a>
                    </div>

                    <div className="img">

                        <h2>note-taker</h2>
                        <a href="https://note-taker-ad.herokuapp.com/notes/">
                            <img src={notetakerpic} class="w3-border" alt="Norway"
                                style={{ padding: "4px", width: "100%" }} />
                        </a>
                    </div>

                    <div class="img">

                        <h2>Weather App</h2>
                        <a href="https://dasamith.github.io/Weather-Dashboard/">
                            <img src={weatherpic} class="w3-border" alt="Norway"
                                style={{ padding: "4px", width: "100%" }} />
                        </a>
                    </div>
                    <div class="img">

                        <h2>Work Day Scheduler</h2>
                        <a href="https://dasamith.github.io/homework5/">
                            <img src={WorkDaySchedulerpic} class="w3-border" alt="Norway" style={{ padding: "4px", width: "100%" }} />
                        </a>
                    </div>
                    <div class="img">

                        <h2>online-offline-Budget-Trackers</h2>
                        <a href="https://online-offline-budgettracker.herokuapp.com/">
                            <img src={budgettrackerpic} class="w3-border" alt="Norway"
                                style={{ padding: "4px", width: "100%" }} />
                        </a>
                    </div>

                    <div class="img">

                        <h2>employee-directory</h2>
                        <a href="https://employee-directory1000.herokuapp.com/">
                            <img src={employeedirectorypic} class="w3-border" alt="Norway"
                                style={{ padding: "4px", width: "100%" }} />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default home;
