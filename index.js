const Express = require('express')
const axios = require("axios");
const app= Express()
const addWords=require('./routes/addWords')
const getWords=require('./routes/getWords')
const cors = require('cors')
const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://Jai-Singhal:Mongodbsinghal@02@cluster0.rwdlf.mongodb.net/MongoDataBase?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true })
 .then(()=> console.log('Connected to mongodb server...'))
 .catch(err=> console.error('Error connecting:',err.message));



 





const port=process.env.PORT || 5000;
axios.defaults.headers.common['app_id'] = "03f652f5"
axios.defaults.headers.common['app_key'] = "87260bfc05e9edfdacd3ccc4fd174a7e"

var corsOptions = {
    origin: 'https://jaisinghal02.github.io',
  }
app.use(cors(corsOptions))
app.use('/dictionary/add/word',addWords)
app.use('/dictionary',getWords)

app.get('/',(req,res)=>{
    res.send("OKAY")
})
app.listen(port,(req,res)=>{
    console.log(`Server running at ${port}...`)
})