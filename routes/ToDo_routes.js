const express=require('express');
const routes=express.Router();
const ToDo_actions=require('../controller/ToDo_Controller');
const passport=require('passport');


// non-Authorization required
routes.get('/',passport.revokeAccessIfAuthenticated,ToDo_actions.home);
routes.post('/add-user',passport.revokeAccessIfAuthenticated,ToDo_actions.add_user);




// Authorization required
routes.get('/ToDo',passport.giveAccessIfAuthenticated,ToDo_actions.ToDo_webiste);
routes.post('/add-post',passport.giveAccessIfAuthenticated,ToDo_actions.add_post);
routes.post('/sign-out',passport.giveAccessIfAuthenticated,ToDo_actions.sign_out);
routes.post('/sign-in',passport.createSession,ToDo_actions.createSession);
module.exports=routes;