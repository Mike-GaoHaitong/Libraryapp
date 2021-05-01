const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())  


const authorRouter = require('./routes/authorRouter');

app.get('/',(req,res) => {
    res.send('<h1>Library System</h1>')
})

app.use('/authorDetails', authorRouter);

app.listen(process.env.PORT || 8080, () => {
    console.log('The library app is listening on port 8080!')
})