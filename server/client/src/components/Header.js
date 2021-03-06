import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments'
import logo from '../images/infoplus_logo.jpg'

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a class="orange" href="/auth/google">Login with Google</a></li>
            default:
                return [
                    <li key="1"><Payments /></li>,
                    <li class = "orange" key="3" style={{ margin: '0 10px', padding: '0 7px'}}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li class = "orange" key="2" ><a href="/api/logout">Log Out</a></li>
                ];
        }
    }

    render() {
        console.log(this.props);
        return (

            <nav class="white lighten-1" role="navigation">
                <div class="nav-wrapper container">
                    <Link
                        to={this.props.auth ? '/surveys' : '/'}
                        className="left brand-logo">
                        <a href="#!" id="logo-container" href="#" class="brand-logo" ><img class="logo-image" src={logo} alt="Logo" /></a>
                    </Link>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>


        )
    }
}

function mapStateToProps({ auth }) {
    return { auth } //makes the key and value the same. This is the same as "auth: auth"
}

export default connect(mapStateToProps)(Header);

/*
<div class="container">
                <nav>
                    <div className="nav-wrapper grey lighten-1">
                        <Link
                            to={this.props.auth ? '/surveys' : '/'}
                            className="left brand-logo">
                            <a href="#!" class="brand-logo" ><img class="logo-image" src={logo} alt="Logo" />Logo</a>
                        </Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {this.renderContent()}
                        </ul>
                    </div>
                </nav>
            </div>
*/