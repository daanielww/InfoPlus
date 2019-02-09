// SurveyForm shows a form for a user to add input
import _ from 'lodash'; //lodash installed already by CreateReact app so we don't needa install it
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; //like the "connect" helper. Allows our component to communication to with the redux store that is enclosed by provider tag
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom'

const FIELDS = [
    {label: 'Survey Title', name: 'title'},
    {label: 'Subject', name: 'subject'},
    {label: 'Body', name: 'body'},
    {label: 'Recipient List', name: 'emails'}
];

//have key property just to avoid errors- doesn't do anything

class SurveyForm extends Component {
    renderField() {
        return (
             _.map(FIELDS, ({label, name}) => {
                return (<Field key={name} component={SurveyField} type="text" label={label} name={name} />)
            })
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderField()}
                </form>
                <Link to="/surveys" className ="red btn-flat white-text">
                    Cancel
                </Link>
                <button type="submit" className = "teal btn-flat right white-text">
                    Review
                    <i className="material-icons right">done</i>
                </button>
            </div>
        );
    }
}


//any custom props put onto Field component are automatically passed onto the customer Component SurveyField by reactForms

//Field component is used to take in any sort of input
//"name" prop corresponds to the key which the field data will be stored under in the redux store
//"component" prop - we put html tag that takes in input such as the Input tag,we can replace with custom react component that we make that takes in input
//"type" the type of the input tag. ie. text, filepicker, etc.

function validate(values) { //values contains all values coming off of the form
    const errors = {};

    if (!values.title){
        errors.title = 'you must provide a title'
    }



    return errors; //if reduxForm gets back Empty Errors object, it assumes everything is good otherwise, it thinks something is wrong and stops submition process. 
}

//if there is error, it is passed as a prop to the Field component of the same name as the key in the error object

export default reduxForm({
    validate: validate,
    form: 'surveyForm'
})(SurveyForm);

//validate function automatically run anytime the user wants to submit form
//NOTE: validation function automatically runs right when the component renders
//Dont want to show validation message until the user touches the field