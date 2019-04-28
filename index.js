const express = require('express')
const nunjucks = require('nunjucks')

const app = express()
app.use(express.urlencoded({ extended: false })) // allow to receive data from a form
app.set('view engine', 'njk')

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.get('/', (req, res) => {
  return res.send('Hello, Rafinha!!!')
})

app.listen(3000)
