const mongoose = require('mongoose')

const clothSchema = new mongoose.Schema(
{
   name:{
       type:String,
       required:true
   },
   description:{
       type:String,
       required:true
   },
   price:{
       type:"Number",
       required:true
   },
   image:{
       type:String,
       required:true
   },
   category:{
       type:String,
       required:true
   },
}
)

const clothModel = mongoose.models.cloth || mongoose.model("Cloth",clothSchema)
module.exports = clothModel