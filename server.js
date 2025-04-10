const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.json({
        mesg: 'Hello Nannu Samith'
    })
})

app.listen(5000)