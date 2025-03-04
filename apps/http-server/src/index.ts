
import express from "express"
// import { client } from "@repo/store/client"
import { client } from "@repo/store/client"

const app = express()
app.use(express.json())

app.get('/',function(req,res){

  res.json({
    msg:" home  route"
  })  
  
})

app.post("/signup",async function(req,res){
  
  const username = req.body.username
  const password = req.body.password

  try{
    const response = await client.user.create({
      data:{
        username,
        password
      }
    })
    console.log(response.id)
    res.status(200).json({
      id:response.id
    })
    
  }catch(e){
    console.log("something went wrong here while puting the data in db ", e)
    res.status(503).json({
        msg:e
    })
  }
  
  
})

app.listen(8000,()=>{
    console.log("server is running on port 8000")
})