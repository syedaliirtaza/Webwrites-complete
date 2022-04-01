const express = require("express");
const mongoose = require("mongoose");
const Pusher = require("pusher");
const cors = require("cors");
const { stringify } = require("nodemon/lib/utils");

const app = express();

const port = process.env.PORT || 8080;

const pusher = new Pusher({
  appId: "1370890",
  key: "9b5fd42bd89622f52b6b",
  secret: "1cefe235756091fe9566",
  cluster: "ap2",
  useTLS: true
});

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://admin:admin@cluster0.z23pq.mongodb.net/webWritesDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', function(){
    console.log("Db is Connected")

    const changeStream = mongoose.connection.collection('posts').watch()

    changeStream.on('change', (change)=>{
        console.log("change detected")
        

        if(change.operationType === 'insert'){
            console.log("pusher calling")

            const postDetails = change.fullDocument;

            pusher.trigger('posts', 'inserted', {
                text: postDetails.text,
                image: postDetails.image
            })
        } else {
            console.log("error in pusher")
        }
    })
})

// schema for our website
const webWritesSchema = mongoose.Schema({
    text: String,
    image: String,
})

const commentSchema = mongoose.Schema({
    text: String,
})

// model
const Posts = new mongoose.model("Posts", webWritesSchema);
const Comments = new mongoose.model("Comments", commentSchema);


// apis post
app.post('/upload', function(req, res){
    const body = req.body

    Posts.create(body, (err,data)=>{
        if(err){
            res.send(err);
        } else {
            res.send(data)
        }
    })
})

app.post('/upload/comments', function(req, res){
    const body = req.body

    Comments.create(body, (err,data)=>{
        if(err){
            res.send(err);
        } else {
            res.send(data)
        }
    })
})

// apis get 
app.get("/sync", function(req,res){
    Posts.find((err,data) => {
        if(err){
            res.send(err);
        } else {
            res.send(data)
        }
    })
})

app.get("/sync/comments", function(req,res){
    Comments.find((err,data) => {
        if(err){
            res.send(err);
        } else {
            res.send(data)
        }
    })
})



app.get('/',function(req,res){
    res.send("hello world")
})

app.listen(port, function(req,res){
    console.log(`Server is running on port ${port}`)
})