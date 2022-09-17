const http = require ("http");
const fs = require ("fs");

const filecontent = "<h1> Hello World </h1> <p> This is G.Venkata Chalaapti Sarma... </p>" 

fs.writeFile("index.html" , filecontent, () =>{console.log("new file is written");});

const server = http.createServer((req , res) => {
    fs.readFile("index.html" , {encoding: "utf-8"} , (err ,data) =>{
        res.end(data);
    })
})

server.listen(5000 , () => console.log("server is up at port 5000"));
