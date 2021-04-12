const express=require('express')
const router=express.Router();
const {checkWord} =require('../controllers/checkWord')
const {getWordInfo}= require('../controllers/getWordInfo')
const { Dictionary } = require("../models/dictionary");


router.post('/word/:wordid',async (req,res)=>{
    const word =await checkWord(req.params.wordid)
    const wordID=word[0]["lexicalEntries"][0]["inflectionOf"][0]['id']
    const wordInfo=await getWordInfo(wordID)
    console.log("INFO->",wordInfo["results"][0]["lexicalEntries"])
    let dict= new Dictionary({
         _id: wordID,
         lexicalEntries: wordInfo["results"][0]["lexicalEntries"]
        })
    let result=wordInfo["results"][0]["lexicalEntries"];
    try{
        result=await dict.save();
    }
    catch(err){
        console.log(err.message)
        result=err.message
    }
    res.send(result)
})

module.exports= router