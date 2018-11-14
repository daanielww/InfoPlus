const passport = require('passport');

module.exports = (app) => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/logout', (req, res) => {
        req.logout(); //function attached onto req object by passport, kills the cookie in req object.
        res.send(req.user); //should return nothing because cookie is destroyed so deserialize won't have an id to look for in the database and so should return no user object
    });

    app.get('/api/current_user', (req,res) =>{
        res.send(req.user);
    });

};