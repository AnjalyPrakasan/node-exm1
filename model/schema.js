const mongoose = require('mongoose')


//schema
const regSchema = new mongoose.Schema({
    fname : {type:String},
    lname : {type:String},
    address : {type:String},
    course : {type:String},
    gender : {type:String},
    phone : {type:String},
    email : {type:String}
})

//model
const regModel = mongoose.model('stud_tbl',regSchema)

//export model
module.exports = {
    regModel
}