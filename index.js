let express = require("express");

//app setup
let app = express();

//server setup
let server = app.listen(3000,()=>{
    console.log("project is running at localhost:4000");
});

//route setup
app.get("/",(res,req)=>{
    req.sendFile(__dirname+"/public/index.html");
});