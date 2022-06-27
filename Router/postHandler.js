// dependencies
const {Router}=require('express');
const {client}=require("../mongoDB");
const {ObjectId}=require('mongoDB');
const postRoute = Router();

const db=client.db('blogs');
const posts=db.collection('posts');
// const users=db.collection('users');

// insert a single post
postRoute.post('/', async(req, res) => {
try {
    const result = await posts.insertOne(req.body)
    // console.log(result);
    res.send(result);
} catch (error) {
    res.send(500,error.message);
}
})

// insert multiple posts
postRoute.post('/multiple', async(req, res) => {
try {
    const result = await posts.insertMany(req.body)
    // console.log(result);
    res.send(result);
} catch (error) {
    res.send(500,error.message);
}
})
// get all posts
postRoute.get('/', async(req, res) => {
try {
    const result = await posts.find({}).toArray();
    // console.log(result);
    res.send(result);
} catch (error) {
    res.send(500,error.message);
}
})
// get single post
postRoute.get('/:id', async(req, res) => {
try {
    const result = await posts.findOne({_id: ObjectId(req.params.id)});
    // console.log(result);
    res.send(result);
} catch (error) {
    res.send(500,error.message);
}
})

// export the module
module.exports =postRoute;