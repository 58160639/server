const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.get('/greeting', (req, res) => {
    let lang = {
        en: 'Hello',
        th: 'สวัสดี'
    }
    
    let l = req.query.lang
    console.log(l)

        
    if (!l) {
        res.json({ message: 'Hello' })
    } else {
        res.json({ message: lang[l] })
    }


})
let student = [
        {id: '1',name: 'sirirat',lastname:'chamthaw',studentid: '58160639'},
         {id: '2', name: 'waroon', lastname:'larpsrisawad',studentid: '58160639'
    }]


app.use(bodyparser.urlencoded({ extended: faslse}))
app.use(bodyParser.json)

app.post('/students',(req, res) => {
    let student = req.body
    student.push(student)
    res.json(student)
})
app.get('/students', (req, res) => {
    res.json(students)
})

app.get('/students/:id', (req, res) => {
    res.json(students[req.params.id - 1])
})


module.exports = app