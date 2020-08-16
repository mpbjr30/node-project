const path = require('path');
const express = require('express');
const { response } = require('express');
const { appendFileSync } = require('fs');
const hbs = require('hbs');


const app = express();


// Defined paths for Express config
const root = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


// Handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(root));


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Michael Burke'
    })
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        name: 'Michael Burke'
    })
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Michael Burke',
        message: 'My Message!'
    })
});


app.get('/weather', (req, res) => {
    res.send({

        location: 'Tewksbury',
        forecast: 'Hottthhh!'
    })
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404 Help',
        name: 'Michael Burke',
        errorMessage: 'Help article not found.'
    })
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Michael Burke',
        errorMessage: 'Page not found.'
    })
});

app.listen(3000, () => {
    console.log("Express is up and running on port 3000");
});