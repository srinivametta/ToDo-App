const express=require('express');
const routes=express.Router();
const ToDo_actions=require('../controller/ToDo_Controller');
const passport=require('passport');

routes.get('/',ToDo_actions.Authentication);
routes.get('/ToDo',ToDo_actions.ToDo_webiste);
routes.post('/add-post',ToDo_actions.add_post);
routes.post('/add-user',ToDo_actions.add_user);
routes.post('/sign-in',passport.createSession,ToDo_actions.createSession);
module.exports=routes;