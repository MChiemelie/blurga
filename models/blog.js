const mongoose =  require('mongoose');
const { Schema } = require('mongoose');
const schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        reqiured: true
    },
    body: {
        type: String,
        reqiured: true
    },
    body: {
        type: String,
        reqiured: true
    }
}, {
    timestamps: true
})

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;