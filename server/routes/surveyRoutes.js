const _= require('lodash') // by convention assig lodash to underscore
const Path = require('path-parser').default //path parser library
const { URL } = require('url') //builtin node library

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const mongoose = require('mongoose');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplates')

const Survey = mongoose.model('surveys');

module.exports = app => {
    app.get('/api/surveys/completed', (req,res) => {
        res.send('Thanks for voting!');
    });

    app.post('/api/surveys/webhooks', (req,res) => {
        console.log(req.body);
        console.log("heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeey")

        const p = new Path('/api/surveys/:surveyId/:choice') //creating new parser object

        //we need to use lodash's map because the req.body is an ARRAY-LIKE object. We would have to do awkward shit if we used the default map function. Lodash map can be called directly
        const events = _.map(req.body, ({email, url}) => { // if the incoming object is in JSON it is already an javascript object ready to use. the body of the req is in json so can directly use as javascript object
            const pathname = new URL(url).pathname
            //cant do destructuring of match because it might be null
            const match = p.test(pathname); //if p.test cant extract surveyId AND choice then match will be null otherwise it contains object containing surveyId and choice values
            if (match){
                return {email, surveyId: match.surveyId, choice: match.choice}; //we also need the users email
            }
        });

        //can compact all of this using LODASH CHAINING
        const compactEvents = _.compact(events) //returns only event objects, removes all undefined;
        const uniqueEvents = _.uniqBy(compactEvents, 'email', 'surveyId') //can't have same email and same survey. uses both values to compare

        console.log(uniqueEvents);

        res.send({}) //respond to sendgrid
    });

    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const { title, subject, body, recipients } = req.body

        const survey = new Survey({
            title, //ES6 syntax -> this is the same as "title: title". can do this since field and value are the same
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })), //shorted es6 expression. Wrap curly braces in brackets to tell js that we are defining an object and not a function body
            _user: req.user.id,
            dateSent: Date.now()
        });

        //send email
        const mailer = new Mailer(survey, surveyTemplate(survey));

        try {
            await mailer.send()
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save(); //old user is stale so use the new one that is returned

            res.send(user);
        } catch(err) {
            res.status(422).send(err);
        }
    });
}