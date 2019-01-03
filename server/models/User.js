const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
    googleId: String,
    credits: {type: Number, default: 0}
});

//should be singular 'user'. Mongoose automatically makes the collection the plural (ie. 'users')
mongoose.model('user', userSchema); //2 args means we are trying to load something into it
