// pull in express package
const express = require('express')
// create a variable for PORT
const PORT = process.env.PORT || 3001;
// declare app and set to equal express method
const app = express();
// import the routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// parse income string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON
app.use(express.json());
// use express static on public folder
app.use(express.static('public'));
// use the routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// create app.listen to variable PORT
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});