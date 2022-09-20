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
    }

});


const ToDo=mongoose.model('ToDo',ToDoSchema);

module.exports=ToDo;