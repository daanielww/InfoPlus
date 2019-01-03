const mongoose = require('mongoose')
const RecipientSchema = require('./Recipient')
const {Schema} = mongoose;

const surveySchema = new Schema({
    title: String,
    subject: String,
    body: String,
    recipients: [RecipientSchema],
    yes: {type: Number, default: 0},
    no: {type: Number, default: 0},
    _user: { type: Schema.Types.ObjectId, ref: 'user' }, //By convention use '_' to show that this is a relationship field. Used to setup relationship between 2 models
    dateSent: Date,
    lastResponded: Date
});

mongoose.model('surveys', surveySchema)