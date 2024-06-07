//import model
const {regModel} = require('../model/schema')

const addData = async (req,res)=>
    {
        res.render('./html/registration')
    }
const addDataAction = async (req,res)=>
    {
        try{
            const {fname,lname,address,course,gender,phone,email} = req.body

            //db code
            regModel.create({
                fname,
                lname,
                address,
                course,
                gender,
                phone,
                email

            })
            console.log(fname)
            res.send('Data Added Successfully')
            
        }
        catch(err){
            res.json(err.message)
        }
    }

//list
const list = async (req,res)=>
    {
        try{
            let arr = await regModel.find()
            if(arr.length>0)
                {
                    res.render('./html/list',{items:arr})
                }
            else
            {
                res.render('./html/list',{types:[]})
            }
        }
        catch{}
    }

module.exports = {
    addData,
    addDataAction,
    list
}