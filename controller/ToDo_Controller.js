const ToDoList=require('../model/ToDo_Schema');


module.exports={

    ToDo_webiste:function (req,res) {
        res.render('to_do');
    },

    add_post:function (req,res) {
        ToDoList.create(req.body);
        res.redirect('/');
    }

}