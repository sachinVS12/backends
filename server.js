const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.json({
        mesg: 'Hello Sachin'
    })
})

app.listen(5000)