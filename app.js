const express = require('express');

const app = express();

const port = 3000;
const hostname = 'localhost';

app.use('/users', (req,res,next) => {
    console.log('This is first middelware')
    res.send('<h1>user one</h1>');
})

app.use('/', (req,res, next) => {
    console.log('This is secont middelware');
    res.send('<h1>This is response</h1>');
});

app.listen(port,hostname,() => {
    console.log(`server running at http://${hostname}:${port}`);
});