module.exports = (req, res, next) => {
    //The return keyword returns from your function, thus ending its execution. This means that any lines of code after it will not be executed.
    //In some circumstances, you may want to use res.send and then do other stuff.
    if (!req.user){
        return res.status(401).send({error: 'must be logged in'}); //status code in the 400's indicates to the user that made the request that they did something wrong. There is smthing wrong with req
    }

    next(); //go onto next middleware
};

//can't fake a user login because we are attaching the user object directly onto the req object and that can only be done on our servers
//you can't just send in a request containing a user object(even if it has all the correct info) because it will still get put in req.body and not directly on req
//body-parser will put the body of the req into req.body so caller cannot add their own user object directly onto req