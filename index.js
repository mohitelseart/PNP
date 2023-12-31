const express=require("express")
const connection=require("./db")
const {noteRouter}=require("./routes/pnp.routes")

require('dotenv').config()
const app=express()

app.use(express.json())

app.use("/pnpdata",noteRouter)

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to db")
    }
    catch(err){
        console.log(err.message)
    }
    console.log(`server running at ${process.env.port}`)
})