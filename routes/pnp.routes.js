const express=require("express")
const {pnpModel}=require("../model/pnp.model")
const noteRouter=express.Router()

noteRouter.get("/",async(req,res)=>{
    const notes=await pnpModel.find()
    res.send(notes)
})

noteRouter.post("/create",async(req,res)=>{
    const payload=req.body
    const note=new pnpModel(payload)
    await note.save()
    res.send({"msg":"customer request has been submitted"})
})

noteRouter.patch("/update/:id",async(req,res)=>{
    const payload=req.body
    const noteID=req.params.id
    await pnpModel.findByIdAndUpdate({_id:noteID},payload)
    res.send({"msg":`Note with id :${noteID} has been updated`})
})

noteRouter.delete("/delete/:id",async(req,res)=>{
    const noteID=req.params.id
    await pnpModel.findByIdAndDelete({_id:noteID})
    res.send({"msg":`Note with id :${noteID} has been deleted`})

})

module.exports={
    noteRouter
}