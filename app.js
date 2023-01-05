const express = require('express');

const mongoose = require('mongoose');

//initailize Express App
const app = express(); 

//connect to MongoDB
mongoose.set('strictQuery', false);
const dbURI = "mongodb+srv://chiemelie:aris1234@blurga.3v2bvt3.mongodb.net/blurga?retryWrites=true&w=majority";
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => {
        console.log('connected to db');
    }).catch(err => console.log(err));
app.set('view engine', 'ejs')

// listening on port 3000
app.listen(3000);

//middleware & static files
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render("index", {title: 'Welcome'});
});

app.get('/home', (req, res) => {
    res.render("index", {title: 'Welcome'});
});

app.get('/about', (req, res) => {
    res.render("about", {title: 'About Us'});
})

// redirects
app.get('/blogs/write', (req, res) => {
    res.render('create', {title: 'Lets Write!'});
})

// redirects
app.get('/write', (req, res) => {
    res.render('create', {title: 'Lets Write!'});
})

// 404 page
app.use((req, res) =>{
    res.status(404).render("404");
})