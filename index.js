const express = require("express");
const  urlencoded =require( "express")
const cors = require("cors");
const upload = require("./uploadImage");
const { response } = require("express");

const App = express()
const port = 5000
App.use(cors())
App.use(express.json({extended:true,limit: "25mb"}))
 App.use(urlencoded({limit: "25mb"}))

App.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    next();

})
App.post("/uploadImage", async (req,res)=>{
    console.log("in server now", req.body.image)
    try {
        console.log("in server now", req.body.image)
        const serverResponse = await upload(req.body.image)
          console.log("here inside",serverResponse)
        return  res.status(200).send(serverResponse)
        
    } catch (error) {
        
        return  res.status(400).send(error.message)
    }
})
App.listen(port, ()=> {
    console.log("listening to port 5000")
})