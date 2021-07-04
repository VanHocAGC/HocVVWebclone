const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const path = require('path')
const exphbs  = require('express-handlebars');
const route = require('./routes')

//set view
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'resources/views'))


//fix req.body
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//set static file
app.use(express.static(path.join(__dirname, 'public')))


//send error log
app.use(morgan('combined', {
    skip: function (req, res) { return res.statusCode < 400 }
  }))



//Route init
route(app);



  //listen port 3000
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})