const mongoose = require('mongoose')
const {MONGO_URL} = process.env;
const connectdb = async()=>{
  mongoose.connect(MONGO_URL)
  console.log('conected to atlus');
}
module.exports=connectdb