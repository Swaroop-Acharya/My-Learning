const express=require('express');
const app=express();
const port=80;
// Static files are the public files that we want to keep on our server so that anyone can download or use it. 
// To serve the static files, we can use the following code-
// For serving static fies

app.use("/static",express.static('staticf'));


//get request takes two args:- endpoint , callback
app.get("/",(req,res)=>{
    res.send("This is my first app using express");
});
app.get("/about",(req,res)=>{
    res.send("This is about section of my first app using express");
});
app.get("/services",(req,res)=>{
    res.send("This is service section of my first app using express");
});
// we can also get the status code using get request
app.get("/products",(req,res)=>{
    res.status(200).send("This is about service of my first app using express");
});


//post request takes two args:- endpoint , callback
// we can have both get and post request for same end point
app.post("/about",(req,res)=>{
    res.send("This is post request of my about section ")
});

// we have to listen this 
app.listen(port,()=>{
    console.log(`Server is up and runing at port ${port}`);
});