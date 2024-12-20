const express=require('express');
const connectDB=require('./config/database')
const User=require('./models/user')

const app=express();

app.post('/signup',async(req,res)=>{

    
const user=new User ({
    firstName:'atul',
    lastName:'ware',
    emailID:'atul@123',
    password:'12345678'
});


await user.save();
res.send("user added successfully")
    
    
});



connectDB()
.then(()=>{
console.log("Database Connection Established");

app.listen(7777,()=>{
    console.log('your server is successfully establish on port 7777');
});
})
.catch((err)=>{
    console.error("database cannot be connected",err);
});


