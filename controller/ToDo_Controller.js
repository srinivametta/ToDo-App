const ToDoList=require('../model/ToDo_Schema');
const User=require('../model/User_Schema');

module.exports={

    ToDo_webiste:function (req,res) {
        res.render('to_do');
    },

    add_post:async function (req,res) {
        console.log(req.body);
        try{
            await ToDoList.create(req.body);
        }catch(error){
            console.log(error);
        }

        res.redirect('/ToDo');
    },

    home:function (req,res) {
        res.render('home');
    },

    add_user:async function (req,res) {
        try{
            await User.create(req.body);
        }catch(error){
            console.log(error);
        }
        res.redirect('/');
    },

    createSession:function (req,res) {
        res.redirect('/ToDo');
    }

}