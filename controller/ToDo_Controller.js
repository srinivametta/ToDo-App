const ToDoList=require('../model/ToDo_Schema');
const User=require('../model/User_Schema');

module.exports={

    ToDo_webiste:function (req,res) {
        res.render('to_do');
    },

    add_post:async function (req,res) {
        try{

            await ToDoList.create(req.body);
            res.redirect('/ToDo');
        }catch(error){
            console.log(error);
        }
    },

    Authentication:function (req,res) {
        res.render('home');
    },

    add_user:async function (req,res) {
        try{
            await User.create(req.body);
            res.redirect('/');
        }catch(error){
            console.log(error);
        }
    }

}