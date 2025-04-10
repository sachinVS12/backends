const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.json({
        mesg: 'Hello nannu'
    })
})

app.listen(5000)