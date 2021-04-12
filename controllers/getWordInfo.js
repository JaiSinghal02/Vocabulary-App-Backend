const http = require("https");
const axios =require("axios");

const app_id = "03f652f5"; // insert your APP Id
const app_key = "87260bfc05e9edfdacd3ccc4fd174a7e"; // insert your APP Key




module.exports.getWordInfo=async function (word){
    const fields = ["definitions","examples","etymologies"];
    const strictMatch = "false";
    const url=`https://od-api.oxforddictionaries.com:443/api/v2/entries/en-gb/${word}?fields=${fields}&strictMatch=${strictMatch}`
    // const options = {
    //     host: 'od-api.oxforddictionaries.com',
    //     port: '443',
    //     path: '/api/v2/entries/en-gb/' + wordId + '?fields=' + fields + '&strictMatch=' + strictMatch,
    //     method: "GET",
    //     headers: {
    //       'app_id': app_id,
    //       'app_key': app_key
    //     }
    //   };
    try{
    const res= await axios.get(url)
    console.log("WORD INO-->",res.data)
    return res.data
    }
    catch(err){
        return err
    }
//     http.get(options, (resp) => {
//     let body = '';
//     resp.on('data', (d) => {
//         body += d;
//     });
//     resp.on('end', () => {
//         let parsed = JSON.parse(JSON.parse(JSON.stringify(body)));
//         console.log("\n\nAFTER GETTING WORD INFO-->",parsed);
//     });
// });
}