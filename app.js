const express = require('express');

//initailize Express App
const app = express(); 

app.set('view engine', 'ejs')

// listening on port 3000
app.listen(3000);


app.get('/', (req, res) => {
      res.render("index");
});

app.get('/about', (req, res) => {
    res.render("about");
})

app.get('/about', (req, res) => {
    res.render("about");
})

// redirects
app.get('/blogs/create', (req, res) => {
    res.render('create');
})

// 404 page
app.use((req, res) =>{
    res.status(404).render("404");
})