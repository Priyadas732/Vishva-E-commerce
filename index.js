require('dotenv').config()
const express = require('express')
const app = express()

const port = 4000

app.get('/home', (req, res) => {
  res.send('Hello World!')
})

app.get('/blog', (req, res) =>{
  res.send('priya.com')           
})
app.get('/about', (req, res) =>{
  res.send('priya.com')           
})
app.get('/contact', (req, res) =>{
  res.send('priya.com')           
})
app.get('/cart', (req, res) =>{
  res.send('priya.com')           
})

app.get('/login', (req, res) => {
  res.send('<h1>Login at chai aur code</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
