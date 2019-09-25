// *** Rating Model ***
// <--- Modules --->
const mongoose = require('mongoose');
const { Schema } = mongoose; // Empty schema object-type

// <--- Schema --->
const RatingSchema = new Schema({
    comment: {
        type: String,
        minLength: [2, 'Comment must be at least two characters in length!']
    },
    score: {
        type: Number,
        required: [true, 'Rating is required!']
    }
}, { timestamps: true });

// <--- Document Model --->
module.exports = mongoose.model('Rating', RatingSchema); // Attaches schema to model