const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');


module.exports = (app) => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for credits',
            source: req.body.id
        });

        req.user.credits += 5;
        const user = await req.user.save(); //by convention we use the value returned by save operation be req.user from before is considered old, we use more updated information

        res.send(user);
    });
};