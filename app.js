const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/',(req, res)=>{
    // res.send('講幹話要開始囉')  
    res.render('index')
})
//取得表單資料
app.post('/',(req, res)=>{
    console.log(`req.body.jobs:${req.body.jobs}`)

})

app.listen(port,()=>{
    console.log(`已經連線到http://localhost:${port}`)
})
