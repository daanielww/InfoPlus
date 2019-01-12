import React from 'react';

const Landing = () => {
    return (
        <div>
            <div class= "main-background">
            <div class="section no-pad-bot" id="index-banner">
                <div class="container">
                    <br/><br/>
                        <h1 class="header center white-text">Starter Template</h1>
                        <div class="row center ">
                            <h5 class="header col s12 light white-text">A modern responsive front-end framework based on Material Design</h5>
                        </div>
                        <div class="row center">
                            <a href="http://materializecss.com/getting-started.html" id="download-button" class="btn-large waves-effect waves-light orange">Get Started</a>
                        </div>
                        <br/> <br/>

                </div>
            </div>

                    <div class="container">
                        <div class="section">

                            <div class="row">
                                <div class="col s12 m4">
                                    <div class="icon-block">
                                        <h2 class="center white-text">LOL</h2>
                                        <h5 class="center white-text">Speeds up development</h5>

                                        <p class="light white-text">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                                    </div>
                                </div>

                                <div class="col s12 m4">
                                    <div class="icon-block">
                                        <h2 class="center white-text">LMAO</h2>
                                        <h5 class="center white-text">User Experience Focused</h5>

                                        <p class="light white-text">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                                    </div>
                                </div>

                                <div class="col s12 m4">
                                    <div class="icon-block">
                                        <h2 class="center light-blue-text white-text">ROFL</h2>
                                        <h5 class="center white-text">Easy to work with</h5>

                                        <p class="light white-text">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
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
                                    <p class="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>


                                </div>
                                <div class="col l3 s12">
                                    <h5 class="white-text">Settings</h5>
                                    <ul>
                                        <li><a class="white-text" href="#!">Link 1</a></li>
                                        <li><a class="white-text" href="#!">Link 2</a></li>
                                        <li><a class="white-text" href="#!">Link 3</a></li>
                                        <li><a class="white-text" href="#!">Link 4</a></li>
                                    </ul>
                                </div>
                                <div class="col l3 s12">
                                    <h5 class="white-text">Connect</h5>
                                    <ul>
                                        <li><a class="white-text" href="#!">Link 1</a></li>
                                        <li><a class="white-text" href="#!">Link 2</a></li>
                                        <li><a class="white-text" href="#!">Link 3</a></li>
                                        <li><a class="white-text" href="#!">Link 4</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="footer-copyright">
                            <div class="container">
                                Developed by <a class="orange-text text-lighten-3" href="http://wang-daniel.com">Daniel Wang</a>
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