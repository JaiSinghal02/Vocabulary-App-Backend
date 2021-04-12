const axios =require("axios");





module.exports.checkWord=async function(word){
    const wordId = word;
    const url=`https://od-api.oxforddictionaries.com:443/api/v2/lemmas/en/${word}`
   
    try{
    const res = await axios.get(url)
    return res.data.results
    }
    catch(err){
        return err
    }
}
