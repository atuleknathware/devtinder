const express=require('express');

const app=express()

app.get("/",(req,res)=>{
    res.send("this is my response")
})

app.get("/test",(req,res)=>{
    res.send("this is my response for test")
})

app.listen(7777,()=>{
    console.log('your server is successfully establish on port 7777')
})
app.listen(7777,()=>{
    console.log('your server is successfully establish on port 7777')
})