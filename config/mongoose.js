const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/practise_basic_self');

// acquire the check if the data is connected or not
const db=mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to DB'));

db.once('open',function () {
    console.log('connected to database');
});

module.exports=db;