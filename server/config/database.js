// *** MongoDB ***
// <--- Modules --->
const mongoose = require('mongoose');
const fs = require('fs'); // file-share
const path = require('path');
const modelsPath = path.resolve('server', 'models'); // points to server/models folder
const reg = new RegExp('\\.js$', 'i'); // .js extension for automated model additions, 'i' is wildcard 'like' for js
const db = 'mongodb://localhost/rate-my-cakes';

// <--- DB Settings --->
mongoose.connect(db, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }); // settings to avoid deprecation warnings
mongoose.Promise = global.Promise; // Express promise override

// <--- DB Connection Events --->
// ** Successful Connection **
mongoose.connection.on('connected', () => {
    console.log(`Mongoose default connection open to ${ db }`);
});

// ** Error on Connection **
mongoose.connection.on('error', err => {
    console.log(`Mongoose default connection error: ${ err }`)
    process.exit(0); // kill DB connection
});

// ** Disconnect **
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection interrupted');
});

// ** Node process end => Disconnect **
process.on('SIGINT', () => {
    mongoose.connection.close( () => {
        console.log('Mongoose default connection disconnected through program termination');
        process.exit(0); // kill DB connection
    });
});

// <--- Automatic Model Construction --->
fs.readdirSync(modelsPath).forEach(file => {
    // REGEX test for file .js ext
    if(reg.test(file)) {
        require(path.join(modelsPath, file)); // require file (model)
    }
})
