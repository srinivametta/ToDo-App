const express=require('express');
const routes=express.Router();
const ToDo_actions=require('../controller/ToDo_Controller');


routes.get('/',ToDo_actions.ToDo_webiste);
routes.post('/add-post',ToDo_actions.add_post);

module.exports=routes;