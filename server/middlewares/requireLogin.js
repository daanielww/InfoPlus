module.exports = (req, res, next) => {
    //The return keyword returns from your function, thus ending its execution. This means that any lines of code after it will not be executed.
    //In some circumstances, you may want to use res.send and then do other stuff.
    if (!req.user){
        return res.status(401).send({error: 'must be logged in'});
    }

    next(); //go onto next middleware
};