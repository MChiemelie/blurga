const express = require('express');

//initailize Express App
const app = express(); 

app.set('view engine', 'ejs')

// listening on port 3000
app.listen(3000);


app.get('/', (req, res) => {
      res.render("index", {title: 'Welcome'});
});

app.get('/about', (req, res) => {
    res.render("about", {title: 'About Us'});
})

// redirects
app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Lets Write!'});
})

// 404 page
app.use((req, res) =>{
    res.status(404).render("404");
})