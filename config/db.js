const { cyan } = require('colors');
const mongoose = require('mongoose');
 mongoose.set("strictQuery", false);
const connectDB = async() =>{
  
   // mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });
    const conn = await mongoose.connect(process.env.MONGO_URI);
    

    console.log(`MongoDB Connected: ${conn.connection.host}`, cyan.underline.bold);
 
};
module.exports = connectDB;