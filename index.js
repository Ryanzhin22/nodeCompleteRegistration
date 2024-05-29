const express = require("express")
const server = express()

server.get("/",(req,res)=>{
    res.send("<h1>Home page</h1>")
})

const PORT = 5000
server.listen(PORT, ()=>{
    console.log("Servidor rodando na porta: " + PORT)
})