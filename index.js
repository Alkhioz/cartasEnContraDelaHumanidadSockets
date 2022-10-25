const express= require('express')
const jsonServer = require('json-server')
const http = require('http')
const path = require('path')

const app = express()
app.set("port", 8081)

app.use('/api', jsonServer.router('database/db.json'))
app.use(express.static(path.join(__dirname,"public")))

const server=http.createServer(app)
server.listen(process.env.PORT || app.get('port'),()=>{
    console.log("server on port ",app.get('port'))
})