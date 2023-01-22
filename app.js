const { render } = require('ejs');
const e = require('express');
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
        console.log('connected');
}).catch(err => {console.log(err)});

// adding the express view engine    
app.set('view engine', 'ejs');

//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));

// basic routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render("about", {title: 'About Us'});
})

//blog routes
app.get('/blogs', (req, res) => {
    Blog.find()
    .then(result => {
        res.render('index', { title: 'Welcome', blogs: result });
    }).catch (error => {
     console.log(error);   
    });
});

app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
    .then(result => {
        res.redirect('/blogs');
    }).catch(err => { console.log(err);})
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

// (// get a blog
// app.get('/single-blog', (req, res) => {
//     Blog.findById('63ba64dd2c6e24bd4d9509e1')
//     .then(result => {
//         res.send(result);
//     }).catch(err => {
//         console.log(err);
//     })
// })

// //get all the blogs
// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//     .then(result => {
//         res.send(result);
//     }).catch(err => {
//         console.log(err);
//     })
// })
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'Chiemelie Third blog',
//         snippet: 'Third attempt',
//         body: 'I want to ssee how this thing really works'
//     });
//     blog.save() 
//     .then(result => {
//         res.send(result)
//     }).catch(err => {
//         console.log(err);
//     })
// });
// )