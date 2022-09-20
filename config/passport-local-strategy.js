const User=require('../model/User_Schema');
const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;


passport.use(new LocalStrategy({

    usernameField:'email'
},

async function (email,password,done) {
    
    try{

        const user_info=await User.findOne({email:email});
        
        
        if(!user_info||user_info.password!=password){
            console.log('Invalid Username/Password');
            done(null,false);
        }
        
        done(null,user_info);
    }catch(err){
        console.log('err',err);
        done(err);
    }
}

));


passport.serializeUser(function (user,done) {
    done(null,user.id);
});

passport.deserializeUser(async function (id,done) {
    
    try{
        const user_info=await User.findById(id);
        done(null,user);
    }catch(error){
        done(err);
    }
    
});