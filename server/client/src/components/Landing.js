import React from 'react';

const Landing = () => {
    return (
        <div>
            <div class= "main-background">
            <div class="section no-pad-bot" id="index-banner">
                <div class="container">
                    <br/><br/>
                        <h1 class="header center white-text">InfoPlus</h1>
                        <div class="row center ">
                            <h5 class="header col s12 light white-text">A Comprehensive Data Collection Application</h5>
                        </div>
                        <div class="row center">
                            <a href="#!" id="download-button" class="btn-large waves-effect waves-light orange">Learn More</a>
                        </div>
                        <br/> <br/>

                </div>
            </div>

                    <div class="container">
                        <div class="section">

                            <div class="row">
                                <div class="col s12 m4">
                                    <div class="icon-block">
                                        <h2 class="center white-text"> <i class="center white-text large material-icons">markunread</i></h2>
                                        <h5 class="center white-text">Send out Surveys</h5>

                                        <p class="light white-text">Quickly and easily create and send out surveys. Securely gather information at a moments notice.</p>
                                    </div>
                                </div>

                                <div class="col s12 m4">
                                    <div class="icon-block">
                                        <h2 class="center white-text"> <i class="center white-text large material-icons">insert_chart</i></h2>
                                        <h5 class="center white-text">Data Analysis</h5>
                                        <p class="light white-text">Easily access gathered information. Utilize our data analysis tools to get meaningful statistics.</p>
                                    </div>
                                </div>

                                <div class="col s12 m4">
                                    <div class="icon-block">
                                        <h2 class="center white-text"> <i class="center white-text large material-icons">border_color</i></h2>
                                        <h5 class="center white-text">Get Feedback</h5>

                                        <p class="light white-text">Get feedback from customers and students. Whether its right after a product launch or exam. See what your clients think!</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <br/><br/>
                    </div>
                    </div>

                    <footer class="page-footer orange">
                        <div class="container">
                            <div class="row">
                                <div class="col l6 s12">
                                    <h5 class="white-text">Bio</h5>
                                    <p class="grey-text text-lighten-4">Coming Soon!</p>


                                </div>
                            </div>
                        </div>
                        <div class="footer-copyright text-lighten-3 orange darken-4">
                            <div class="container center">
                                Developed by <a class="white-text" href="http://wang-daniel.com">Daniel Wang</a>
                            </div>
                        </div>
                    </footer>
                </div>
                )
            }
            
            export default Landing;
            
            /*
componentDidMount() {
                    setTimeout(() => {
                        document.addEventListener('DOMContentLoaded', function () {
                            var elems = document.querySelectorAll('.slider');
                            var instances = M.Slider.init(elems, options);
                        });
                    }, 1000);
                };
            
    render() {
        return (
            <div class="slider">
                    <ul class="slides">
                        <li>
                            <img src="https://lorempixel.com/580/250/nature/1" alt="img"></img>
                            <div class="caption center-align">
                                <h3>This is our big Tagline!</h3>
                                <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                            </div>
                        </li>
                        <li>
                            <img src="https://lorempixel.com/580/250/nature/2" alt="img"></img>
                            <div class="caption left-align">
                                <h3>Left Aligned Caption</h3>
                                <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                            </div>
                        </li>
                        <li>
                            <img src="https://lorempixel.com/580/250/nature/3" alt="img"></img>
                            <div class="caption right-align">
                                <h3>Right Aligned Caption</h3>
                                <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                            </div>
                        </li>
                        <li>
                            <img src="https://lorempixel.com/580/250/nature/4" alt="img"></img>
                            <div class="caption center-align">
                                <h3>This is our big Tagline!</h3>
                                <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                            </div>
                        </li>
                    </ul>
                </div>
                )
            }
    */