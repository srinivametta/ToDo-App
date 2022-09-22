const mongoose=require('mongoose');

const ToDoSchema=new mongoose.Schema({

    ToDo:{
        type:String,
        required:true
    },

    Deadline:{
        type:Date,
        required:true
    },

    Importance:{
        type:String,
        required:true
    },

    // User:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     required:true,
    //     ref:'User'
    // }

});


const ToDo=mongoose.model('ToDo',ToDoSchema);

module.exports=ToDo;