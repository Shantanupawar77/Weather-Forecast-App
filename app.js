const path=require("path");
const express=require("express");
const port=process.env.PORT||3000;
const app=express();

app.set("view engine","hbs");
// Routing
app.get("",(req,res)=>{

    res.render("index");
})
app.get("*",(req,res)=>{
    res.render("404Error");
})
app.listen(port,()=>{
    console.log(`Listening to the port at ${port}`);
})
