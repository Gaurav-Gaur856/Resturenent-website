const mongoose = require("mongoose");

const connectDb =async () => {
    try{
      const connection = await mongoose.connect(process.env.MONGO_URL);
      if(connection){
        console.log('Connected to Mongodb');
      }
    }catch (error){
       return error.message; 
    }
};

module.exports = {connectDb};