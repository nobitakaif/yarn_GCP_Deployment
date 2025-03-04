
import { WebSocketServer } from "ws"
import { client } from "@repo/store/client"

const wss = new WebSocketServer({port:8080})

wss.on("connection",async function(ws){
    const reponse = await client.user.create({
        data:{
            username:"nobita-ws-server",
            password:"nobitakaif"
        }
    })
    ws.send(reponse.id)
    ws.send("your websocket is up and running")
})