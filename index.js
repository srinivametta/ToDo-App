const express=require('express');
const port=8000;
const app=express();
const bodyParser=require('body-parser');
const db=require('./config/mongoose');
const passport=require('passport');
const session=require('express-session');
const passportLocal=require('./config/passport-local-strategy');

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