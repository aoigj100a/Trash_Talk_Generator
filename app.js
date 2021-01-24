const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')

const talkShit = require('./talkShit.js')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    // res.send('講幹話要開始囉')  
    res.render('index')
})
//取得表單資料
app.post('/', (req, res) => {
    //取得處理好的結果 並且傳送至index 印在畫面
    let result = talkShit(req.body)

    //保留使用者輸入的資料
    if(req.body.jobs ==="工程師"){
        req.body.no1 = true
    }else if (req.body.jobs ==="設計師"){
        req.body.no2 = true
    }else if(req.body.jobs ==="創業家"){
        req.body.no3 = true
    }
    const options = req.body
    
    res.render('index', { result, options })

})

app.listen(port, () => {
    console.log(`已經連線到http://localhost:${port}`)
})
