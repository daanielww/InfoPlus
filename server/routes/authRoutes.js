const passport = require('passport');

module.exports = (app) => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    app.get('/auth/google/callback', passport.authenticate('google'),
        (req, res) => {
            res.redirect('/surveys'); //works because when calling '/surveys' we technically still on the react server at localhost:3000 so '/surveys' is really 'localhost:3000/surveys'. We were able to call this route on localhost5000 because of the proxy we set up for this route.
        }
    );

    app.get('/api/logout', (req, res) => {
        req.logout(); //function attached onto req object by passport, kills the cookie in req object.
        res.send(req.user); //should return nothing because cookie is destroyed so deserialize won't have an id to look for in the database and so should return no user object
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

};