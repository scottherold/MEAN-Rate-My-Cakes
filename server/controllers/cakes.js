// *** Cakes Controller ***
// <--- Modules --->
const Cake = require('mongoose').model('Cake');

// <--- Controller Functions --->
module.exports = {
    all(req, res) {
        Cake.find()
            .then(cakes => res.status(200).json({ cakes: cakes }))
            .catch(err => res.status(400).json(err));
    },
    show(req, res) {
        Cake.findById(req.params.id)
            .then(cake => {
                res.status(200).json({ cake: cake } ? cake: "No such cake exists...") // if no cake exists, send back the message
            })
            .catch(err => res.status(400).json(err));
    },
    create(req, res) {
        Cake.create(req.body)
            .then(cake => res.status(200).json({ cake: cake }))
            .catch(err => res.status(400).json(err));
    },
    search(req, res) {
        let name = req.params.query
        Cake.find({ baker_name: { $regex: '.*' + name + '.*' } }) // Search for baker name's like the input
            .then(cakes => {
                res.status(200).json({ cakes: cakes } ? cakes : "No cakes found by that baker...") // if no cakes exist, send back the message
            })
            .catch(err => res.status(400).json(err));
    }
}