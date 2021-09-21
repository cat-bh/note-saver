const express = require('express');
const fs = require('fs');
const PORT = process.env.PORT || 3001;
const path = require('path');

const htmlRoutes = require('./routes/htmlroutes');
const apiRoutes = require('./routes/apiroutes');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
})