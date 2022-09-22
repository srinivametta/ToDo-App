const ToDoList=require('../model/ToDo_Schema');
const User=require('../model/User_Schema');

module.exports={

    ToDo_webiste:async function (req,res) {
        console.log(req.user.id);
        const post_info=await ToDoList.findOne({User:req.user.id}).populate('User');
        res.render('to_do',{body_post:post_info});
    },

    add_post:async function (req,res) {
        try{
            var deadline_date=new Date(req.body.Deadline);
            var curr_date=new Date();
            req.body.User=req.user.id;
            if (deadline_date.getFullYear>=curr_date.getFullYear||deadline_date.getMonth>=curr_date.getMonth||deadline_date.getDate>=curr_date.getDate) {
                await ToDoList.create(req.body);
            }
            else{
                console.log("Give a valid date");
            }
        }catch(error){
            console.log("error when posting ",error);
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
    },

    sign_out:async function (req,res) {
        req.logout(function (err) {
            if (err) {   
                console.log(err);
            }
        });
        res.redirect('/');
    }

}