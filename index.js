const volleyball = require('volleyball')
const mongoose = require('mongoose');
const express = require('express')
const cors = require('cors')
const app = express()

mongoose.connect('mongodb://127.0.0.1/mongo_spotify', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const status = mongoose.connection;
status.on('error', console.error.bind(console, 'error'))

status.once('open', ()=>{ 
    console.log('mongo connected!');
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(volleyball)

app.use('/api', () => console.log("test"))

app.listen(process.env.PORT, () => {
    console.log("Works on 3000")
})