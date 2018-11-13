const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
    googleId: String
});

mongoose.model('users', userSchema); //2 args means we are trying to load something into it
