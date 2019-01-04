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
        res.send({});
    })

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