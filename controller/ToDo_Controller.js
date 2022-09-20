const ToDoList=require('../model/ToDo_Schema');


module.exports={

    ToDo_webiste:function (req,res) {
        res.render('to_do');
    },

    add_post:function (req,res) {
        ToDoList.create(req.body);
        res.redirect('/ToDo');
    },

    Authentication:function (req,res) {
        res.render('home');
    },

    add_user:function (req,res) {
        res.redirect('/')  
    }

}