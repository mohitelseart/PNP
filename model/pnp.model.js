const mongoose=require("mongoose")

const pnpSchema=mongoose.Schema({
   fullname:String,
   email:String,
   comment:String
})

const pnpModel=mongoose.model("note",pnpSchema)

module.exports={
    pnpModel
}