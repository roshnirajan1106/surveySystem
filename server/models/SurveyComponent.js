const mongoose = require('mongoose');
const surveryComponentSchema = mongoose.Schema({
    questionText:{
        type: String,
        required: true,
    },
    questionType:{
        type: String,
        required: true,
    },
    options:[{
        type: String,
        default: null
    }],
    responses:[
        {
            type: String,
            default: null       
        }
    ],
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

module.exports = mongoose.model("surveryComponent", surveryComponentSchema);