import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login with Google</a></li>
            default:
                return <li><a href="/api/logout">Log Out</a></li>
        }
    }

    render() {
        console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link 
                        to={ this.props.auth ? '/surveys' : '/'} 
                        className="left brand-logo">
                        Logo
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({auth}) {
    return {auth} //makes the key and value the same. This is the same as "auth: auth"
}

export default connect(mapStateToProps)(Header);