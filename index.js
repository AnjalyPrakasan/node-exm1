const express = require('express')
const app = express()

//dotenv
require('dotenv').config()

//cors
const cors = require('cors')
app.use(cors())
app.use(express.urlencoded({extended:true}))

//converting to json
app.use(express.json())

//setting views
app.set('view engine','ejs')

//router
const registerRouter = require('./router/regRouter')
app.use('/api',registerRouter)








//mongodb
const mongoose = require('mongoose')

main().catch(err=>console.log(err))

async function main()
{
    await mongoose.connect(process.env.MONGO_URL)
    console.log('mogoose connected')
}


app.listen(process.env.PORT,()=>
{
    console.log('Server is Running.. http://localhost:9001')
})