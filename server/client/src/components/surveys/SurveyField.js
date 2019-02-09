// SurveyField contains logic to render a single label and text input
import React from 'react';

//using nested object destructuring with meta object
export default ({input, label, meta:{error, touched}}) => { //rendered by the field tag so reactForm gives it access to a bunch of props. 
    
    function displayError(touch) {
        if (touch) {
            return error
        }
    }

    return (
        <div>
            <label>{label}</label>
            <input {...input}/>
            <div className="red-text" style={{ marginBottom: '20px'}}>
                {displayError(touched)}
            </div>
        </div>
    )
}



//touched property is if the user clicked on field or not

//reactForm CAN take care of displaying the input html fields, but thats not its strength or purpose.
//so instead we take care of it ourselves in our custom component

//ReactForm automatically generates a bunch of event handlers for us to pass onto text input that we are rendering/generating ourselves
//we need to attach event handlers to input tag

//"{...input}" this is the spread operator - 
// expands out all the object's key value pairs
// just passes all event listeners to input tag(attaches them)

// touched && error -> if touched is true then error is evaluated and it will always be true since its non-empty string, thus the second arg is returned so the error is returned