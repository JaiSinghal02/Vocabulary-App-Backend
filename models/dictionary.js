const mongoose=require('mongoose')

const Dictionary=mongoose.model('Dictionary',mongoose.Schema({
    _id: String,
    lexicalEntries: {type:Array},
}))

exports.Dictionary=Dictionary