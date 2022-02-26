const express = require('express')
const app = express()
const port = 6600

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://akfkdhwk:qudals090862@cluster0.syb7f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})