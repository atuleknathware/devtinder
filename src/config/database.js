const mongoose=require('mongoose');

const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://atulware22:2NhABYGf0H3KLyab@devtinder.li5ci.mongodb.net/devTinderDatabase")
}

module.exports=connectDB;