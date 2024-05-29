const express = require("express")
const mysql = require("mysql2")
const server = express()
const dotenv = require("dotenv")
const path = require("path")

// DOTENV
dotenv.config({ path: "./.env" })

// MYSQL CONNECT
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
})

db.connect((err)=>{
    if(err){
        console.error("Não foi possível fazer a conexão com o banco: " + err)
    } else {
        console.log("Conexão feita com sucesso!")
    }
})

// HBS
server.set('view engine', 'hbs')

// PATH
const publicDirectory = path.join(__dirname, './public')
server.use(express.static(publicDirectory))

// ROUTER
server.get("/",(req,res)=>{
    res.render('index')
})

const PORT = 5000
server.listen(PORT, ()=>{
    console.log("Servidor rodando na porta: " + PORT)
})