const express = require('express');

const app = express();

const port = 3000;
const hostname = 'localhost';

app.use('/users', (req,res,next) => {
    res.send('<h1>user one</h1>');
})

app.use('/', (req,res, next) => {
    console.log('This is first middelwere');
    res.send('<h1>This is response</h1>');
    next();
});

app.use('/',(req,res,next)=> {
    console.log('This is second middleware');
})

app.listen(port,hostname,() => {
    console.log(`server running at http://${hostname}:${port}`);
});