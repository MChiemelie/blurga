const express = require('express');

const mongoose = require('mongoose');

const Blog = require('./models/blog');

//initailize Express App
const app = express(); 

//connect to MongoDB
mongoose.set('strictQuery',true);
const dbURI = "mongodb+srv://chiemelie:aris1234@blurga.3v2bvt3.mongodb.net/blurga?retryWrites=true&w=majority";
mongoose.connect(dbURI)
    .then(result => {
        app.listen(3000);
    }).catch(err => console.log(err));

// adding the express view engine    
app.set('view engine', 'ejs');

//middleware & static files
app.use(express.static('public'));

app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'Chiemelie Second blog',
        snippet: 'Second attempt',
        body: 'I want to try this out again to know if it woyuld still would'
    });
    blog.save() 
    .then(result => {
        res.send(result)
    }).catch(err => {
        console.log(err);
    })
})

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
    res.status(404).render("404", {title: 'Page was not found'});
})