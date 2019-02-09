// SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import SurveyForm from './SurveyForm'
import { reduxForm, Field } from 'redux-form'; //like the "connect" helper. Allows our component to communication to with the redux store that is enclosed by provider tag
import SurveyField from './SurveyField';

class SurveyForm extends Component {
    renderField() {
        return (
            <div>
                <Field type="text" name="title" component={SurveyField}></Field>
            </div>
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderField()}
                </form>
                <button type="submit">Submit</button>
            </div>
        );
    }
}

//Field component is used to take in any sort of input
//"name" prop corresponds to the key which the field data will be stored under in the redux store
//"component" prop means we want field to appear as HTML input tag, can replace with custom react component
//"type" the type of the input tag. ie. text, filepicker, etc.

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);