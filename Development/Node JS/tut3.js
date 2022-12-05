// Synchronous or blocking execution:- Line by line execution 
// example:- fs.readFileSync()
// Asynchronous or nonblocking exection:- Line by line execution is not guranteed
// example:- fs.readFile()

const fs=require("fs");
fs.readFile("data.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

console.log("This is executed first");