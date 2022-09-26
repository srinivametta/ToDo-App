// practise_self
const passport=require('passport');
const User=require('../model/User_Schema');
const googleStrategy=require('passport-google-oauth20');
const crypto=require('node:crypto');

passport.use(new googleStrategy({
    clientID: '68589261300-pglg08n0otp8ks23iljbfe8kcq1qv883.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:8000/oauth/redirect/google',
  },
  async function verify(accessToken, refreshToken, profile, cb) {
    try{

        let user_info=await User.findOne({email:profile.emails[0].value});

        if(!user_info){
            user_info=await User.create({email:profile.emails[0].value,
                               name:profile.displayName,
                               password:crypto.randomBytes(20).toString('hex')});
        }

        return cb(null,user_info);

    }catch(error){
        cb(error);
    }

}));


passport.googleRequest=passport.authenticate(
    'google',
    {scope:['profile','email']}
);

passport.googleAuthenticate=passport.authenticate(
    'google',
    {failureRedirect:'/'}
);