const express=require('express');
const path=require('path');
const app=express();
const port=80;
// Static files are the public files that we want to keep on our server so that anyone can download or use it. 
// To serve the static files, we can use the following code-
// For serving static fies

app.use("/static",express.static('staticf'));

// Now if we want to serve custom static templates, then we can take the help of template engines.
//  A template engine (template processor) is a software designed to combine templates with a data model 
//  to produce result documents. In simple words, if we feed anything to the template engine, it provides 
//  the custom template output.

//Set template as PUG
app.set("view engine","pug");

// Set views directory
app.set("views",path.join(__dirname,"views"));

// create a route to render the demo.pug file.
app.get("/products",(req,res)=>{
    res.status(200).render('demo', { title: 'Hey', message: 'Hello there!' })
});





//get request takes two args:- endpoint , callback
app.get("/",(req,res)=>{
    res.send("This is my first app using express");
});
app.get("/about",(req,res)=>{
    res.send("This is about section of my first app using express");
});

// we can also get the status code using get request
app.get("/services",(req,res)=>{
    res.status(200).send("This is service section of my first app using express");
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