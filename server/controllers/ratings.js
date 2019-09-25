// *** Ratings Controller ***
// <--- Modules --->
const Cake = require('mongoose').model('Cake');

// <--- Controller Functions --->
module.exports = {
    create(req, res) {
        Cake.findByIdAndUpdate(req.params.id, { $push: { ratings: req.body } }, { runValidators: true, new: true })
            .then(cake => res.status(200).json(cake))
            .catch(err => res.status(400).json(err));
    }
}