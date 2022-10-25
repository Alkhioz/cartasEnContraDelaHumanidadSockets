const express= require('express')
const http = require('http')
const path = require('path')

const app = express()
app.set("port", 8081)
const server=http.createServer(app)
app.use(express.static(path.join(__dirname,"public")))

server.listen(process.env.PORT || app.get('port'),()=>{
    console.log("server on port ",app.get('port'))
})