
const express = require('express')
const fs = require('fs');
const app = express()
//const ejs = require('ejs');
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static('views'))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`App is listening on ${port}`)
})