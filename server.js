// dependencies
const express=require('express');
const {connectDB}=require('./mongoDB');
const postHandler=require('./Router/postHandler');
// initialize express
const app = express();

// middleware 
app.use(express.json());
app.use('/posts',postHandler)
// client.db('test').collection('users').find().toArray((err,result) => {
//     if (err) {
//         console.log(err);
//     }else {
//         console.log(result);
//     }
// })

// app.use('/post',postHandler)


app.listen(3000,() => {
    console.log('listening on port 3000');
    connectDB().catch(error=>console.log(error))
})