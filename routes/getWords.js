const express= require('express')
const router= express.Router();
const {Dictionary}= require('../models/dictionary')

router.get('/',async(req,res)=>{
    const result= await Dictionary.find().select({__v:0})
    res.send(JSON.parse(JSON.stringify(result)))
})

module.exports= router