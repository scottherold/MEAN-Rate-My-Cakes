// *** Cake Model ***
// <--- Modules --->
const mongoose = require('mongoose');
const RatingSchema = require('./rating').model('Rating').schema; // imports rating to be attached as a collection object
const { Schema } = mongoose; // Empty schema object-type

// <--- Variables --->
// const urlMatch = new RegExp("https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)");

// <--- Schema --->
const CakeSchema = new Schema({
    baker_name: {
        type: String,
        minlength: [2, 'Baker name must be at least 2 characters in length!'],
        required: [true, 'Baker name is required']
    },
    cake_url: {
        type: String,
        // match: [urlMatch, "Please use a valid URL!"]
    },
    ratings: [RatingSchema]
}, { timeStamps: true });

// <--- Document Model --->
module.exports = mongoose.model('Cake', CakeSchema); // Attaches schema to model