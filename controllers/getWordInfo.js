const http = require("https");
const axios =require("axios");

const app_id = "03f652f5"; // insert your APP Id
const app_key = "87260bfc05e9edfdacd3ccc4fd174a7e"; // insert your APP Key




module.exports.getWordInfo=async function (word){
    const fields = ["definitions","examples","etymologies"];
    const strictMatch = "false";
    const url=`https://od-api.oxforddictionaries.com:443/api/v2/entries/en-gb/${word}?fields=${fields}&strictMatch=${strictMatch}`
    try{
    const res= await axios.get(url)
    return res.data
    }
    catch(err){
        return err
    }
}