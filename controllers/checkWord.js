const http = require("https");
const axios =require("axios");





module.exports.checkWord=async function(word){
    const wordId = word;
    const url=`https://od-api.oxforddictionaries.com:443/api/v2/lemmas/en/${word}`
    // const options = {
    //     host: 'od-api.oxforddictionaries.com',
    //     port: '443',
    //     path: '/api/v2/lemmas/en/' + wordId,
    //     method: "GET",
    //     headers: {
    //       'app_id': app_id,
    //       'app_key': app_key
    //     }
    //   };
    //   let body = '';
    //   let parsed
    try{
    const res = await axios.get(url)
    return res.data.results
    }
    catch(err){
        return err
    }
    // .then((resp) => {
    //      console.log(resp.data.results)
    //      return resp.data.results
        // parsed = JSON.parse(JSON.parse(JSON.stringify(body)));
        // console.log(typeof parsed)
        // console.log("lexical",parsed["results"][0]["lexicalEntries"][0]["inflectionOf"])
        // let dict= new Dictionary({
        //  _id: word,
        // data: parsed["results"]
        // })
        // dict.save()
        // .then((res)=>{
        //     console.log("RESPONSE__>",res)
        // })
        // .catch(err=>{
        //     console.log(err)
        // })
        
    //     })
    // .catch((err)=>{
    //     return err}
    // )
}
