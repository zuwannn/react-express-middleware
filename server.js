const express = require('express');
const app = express();

const showLog = (req, res, next) => {
    console.log('showLog');
    next()
}

app.use(showLog)

app.use((req, res, next) => {
    console.log('the second log before app.get(`/`)');
    next()
})

app.get('/user/:id', (req, res, next) => {
    console.log('request user params', req.params);
    next()
})
app.get('/', (req, res) => {
    res.send('hello world!')
})


app.listen(3000)