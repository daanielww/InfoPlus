import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions' //take all the actions we have defined and assign them to the actions object

import Header from "./Header"
import Landing from "./Landing"


const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>


/*
how react router works: if we go to path /surveys react-router will go through each one
of the routes defined and ask each one "is your route contained in the route /surveys, if it is show the component", so it
matches every possible route. Ie. "/" will also be matched by /surveys. We fix this by using "exact"
*/
// "exact={true}" and "exact" are the same. By passing in only attribute name its treated as saying the attribute is true
class App extends Component { //for path only put the route portion of the url
    componentDidMount() { //little difference between 'DidMount' and 'willMount' so just use 'didMount'
        this.props.fetchUser(); //performs fetchUser action
    }

    render() {
        return (

            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact={true} path="/" component={Landing} />
                    <Route exact={true} path="/surveys" component={Dashboard} />
                    <Route path="/surveys/new" component={SurveyNew} />
                </div>
            </BrowserRouter>

        );
    }
}

//passing actions object instead of mapDispatchToProps is just shorthand, same functionality
export default connect(null, actions)(App);