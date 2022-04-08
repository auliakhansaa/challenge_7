const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((request,response)=>{
    const requestUrl=url.parse(request.url).pathname;

    if(requestUrl==="/"){
        fs.readFile("./index.json",null,(error,data)=>{ //null untuk menerima data apa adanya, jika pakai utf 8, maka akan jadi pemformatan. jadi WAJIB null
            if(error){
                response.writeHead(404);
                response.write("not found");
            } else{
                response.writeHead(200,{"Content-Type":"application/json"}); //karena bisa jadi css / txt/ dll. jadi harus di deklarasikan.
                response.write(data);
    
                //.html === "text/html"
                //.jpg === ïmage/jpg"
            }
    
            response.end(); //Untuk mengakhiri proses response
        })
    } else if (requestUrl==="/hobi"){
        fs.readFile("./index.html",null,(error,data)=>{ //null untuk menerima data apa adanya, jika pakai utf 8, maka akan jadi pemformatan. jadi WAJIB null
            if(error){
                response.writeHead(404);
                response.write("not found");
            } else{
                response.writeHead(200,{"Content-Type":"text/html"}); //karena bisa jadi css / txt/ dll. jadi harus di deklarasikan.
                response.write(data);
    
                //.html === "text/html"
                //.jpg === ïmage/jpg"
            }
    
            response.end(); //Untuk mengakhiri proses response
        })
    } else{
        
    }
    
})
server.listen(8080);

// refresh pakai kontrol c
//untuk memulai menggunakan node js npm init -y 
