const express = require('express')
const router = require('./routes/myRouter')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(router)
// app.use('/api/shop',require('./routes/myRouter'))
app.listen(3000,()=>{
    console.log("start server at port 3000")
})