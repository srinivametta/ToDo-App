const express=require('express');
const port=8000;
const app=express();
const bodyParser=require('body-parser');
const db=require('./config/mongoose');

app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');
app.set('views','./views');


app.use('/',require('./routes/ToDo_routes'));


app.listen(port,function (err) {
    if(err){
        console.log('error now');
    }
    else{
        console.log("Server is up and running at port:",port);
    }
});