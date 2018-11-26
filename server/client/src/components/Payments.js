import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render() {

        return (
            <StripeCheckout
                name = "InfoPlus"
                description = "5 email credits" 
                amount = {500}
                token = {token => this.props.handleToken(token)} //token is not just a number, its object containing all the payment information
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >

            <button className="btn">
                Load Credits
            </button>

            </StripeCheckout>
        )
    }
}

export default connect(null, actions)(Payments);