const express=require('express')
const router=express.Router();
const {checkWord} =require('../controllers/checkWord')
const {getWordInfo}= require('../controllers/getWordInfo')
const { Dictionary } = require("../models/dictionary");


router.post('/:wordid',async (req,res)=>{
    let result,status=200;
    try{
        const word =await checkWord(req.params.wordid)
        const wordID=word[0]["lexicalEntries"][0]["inflectionOf"][0]['id']
        const wordInfo=await getWordInfo(wordID)
        console.log("INFO->",wordInfo["results"][0]["lexicalEntries"])
        
        try{
                let dict= new Dictionary({
                    _id: wordID,
                    lexicalEntries: wordInfo["results"][0]["lexicalEntries"]
                   })
                result= dict.save();
        }
        catch(err){
            console.log(err.message)
            status=500
            result=err.message
        }
    }
    catch(err){
        status=400
        result=err.message
        console.log(err)
    }
    res.status(status).send(result)
})

module.exports= router