const mongoose = require("mongoose");

const MONGODB_URL = process.env.MONGODB_URL;

exports.connectMongoDB =()=>{

  mongoose.connect(MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>[
    console.log("Connection Successfull!")
  ]).catch((error)=>{
    console.log("Connection Failed!")
    console.log(error);
    process.exit(1); //if failed exit as 1 not 0
  })

}
