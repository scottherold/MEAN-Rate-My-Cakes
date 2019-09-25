// *** Routing ***
// <--- Modules --->
const cakesController = require('../controllers/cakes');
const ratingsController = require('../controllers/ratings')

// <--- Routing --->
module.exports = app => {
    // ** Cakes **
    app.get('/cakes', cakesController.all);
    app.get('/cakes/:id', cakesController.show);
    app.post('/cakes', cakesController.create);

    // ** Search **
    app.get('/cakes/search/:query', cakesController.search);

    // ** Ratings **
    app.put('/cakes/:id/ratings', ratingsController.create)
}