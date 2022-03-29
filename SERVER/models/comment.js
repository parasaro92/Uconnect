const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const commentSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    username: {
        type: String,
        ref: 'User',
      },
    date:{
        type:Date,
        default: Date.now(),
    }
})

module.exports = mongoose.model("Comment",commentSchema)