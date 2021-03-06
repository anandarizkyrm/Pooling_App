const mongoose = require('mongoose');

//create a  options schema  for mongoose    
const options = mongoose.Schema({

    option : String,
    votes : {
        type : Number,
        default : 0
    }
});


const questionSchema = mongoose.Schema({
    title : String,
    question : String,
    private :{
        type : Boolean,
        default : false,
    },
    userid : {
        type : String,
        required : true
    },
    voted: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    answer : [options],
    response : {
        type : Number,
        default : 0
    },
    _creator : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    date : {
        type : Date,
        default : Date.now
    }
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;