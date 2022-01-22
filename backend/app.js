const express = require('express');
// const cors = require('cors');

const app = express();
const mongoose=require("mongoose")
const bodyParser = require("body-parser")
const morgan  = require("morgan")

//Database connection
require("./mongo")

// Middleware
app.use(bodyParser.json())
    .use(morgan())
    // .use(cors())
require("./model/Post")
const Post= mongoose.model("Post")

app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find({})
        res.json(posts)
    } catch (error) {
        res.status(500)
    }
  });

app.get('/posts/:postId', async (req, res) => {

       try {
        const posts = await Post.find({ _id: req.params.Id})
        res.send(post)
       
    } catch (error) {
        res.status(500)
    }
   });

   app.put('/posts/:postId', async (req, res) => {
    try {
     const posts = await Post.findByIdAndUpdate({
          _Id: req.params.Id},
          req.body,{
            new:true,
            runValidators:true
          });
     res.send(post)
    
 } catch (error) {
     res.status(500)
 }
});


app.post("/posts", async (req, res) => {
    try {
        const post = new Post();
        post.name = req.body.name;
        post.email = req.body.email;
        post.password = req.body.password;
        post.contact = req.body.contact;
        await post.save();
        res.json(post)
    } catch (error) {
        res.status(300)
    }
  })
  
app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
